import socketio
import eventlet  #from eventlet import wsgi
sio = socketio.Server() #create server

#Globals
IP = '127.0.0.1' #credentials
PORT = 8000
counter =0 #users counter
userList={} #user list

app = socketio.WSGIApp(sio,static_files={ #html pages
                       '/':'./public/'
                       })

"""
listening for events, first arg is always socket ID
"""
@sio.event
def connect(sid, environ): #session ID , details of clients requets [cookies, headers]
    global counter  
    counter += 1  #user joined, update counter
    sio.emit('clientCounter', counter ) #to=sid , will send to specific, if not , to all.
    print(sid, 'connected. counter:', counter) #letme know in the console 
    
@sio.event
def setNick(sid, nickname):
    global userList
    if (nickname in userList): #if user already exist
        print("name occupied") #this doesnt tell user the error, but they will figure
        sio.emit("imposter", to = sid)
    else:
        userList[nickname] = 1 #append new name to the list
        sio.emit("updateUsers", userList) #send JS the users list
        with sio.session(sid) as session: #opens as dictionary  
            session['nickname']= nickname #bind nickname to SID
            
            print("nickname set", session['nickname'])
            sio.emit('user_joined' , nickname) #tell JS console, a user joined
        
@sio.event
def disconnect(sid ): 
    global counter
    global userList
    counter -= 1  #update user counter
    sio.emit('clientCounter', counter ) #tell JS too
    print(sid, 'disconnected. counter:', counter)
    with sio.session(sid) as session: #opens as dictionary  
        sio.emit('user_left' , session['nickname']) 
        del userList[(session['nickname'])] #remove name
        sio.emit("updateUsers", userList) 

@sio.event 
def userInput( sid , input): #user said something
    with sio.session(sid) as session: #opens as dictionary  
        nickname = session['nickname'] #get his name from his SID
    sio.emit("Text_Message", nickname +": " +input) #send the full message to JS for printing

if __name__ == '__main__':
    eventlet.wsgi.server(eventlet.listen((IP, PORT)), app) #start server