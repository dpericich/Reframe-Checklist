# Reframe Checklist to Demonstrate LocalStorage

This checklist is a demonstration on using localStorage to persist check values across user sessions

### Project Goal
 This is a sister project to a project I'm currently developing in Clojure for my internship. It is a proof of
 concept in vanilla React, before changing the functionality over to Re-frame and Reagent

### Why localStorage?
localstorage is a great way to have your user data persist between sessions. In the realm of FE data storage, there are three commonly used tools. They are: 

1. Cookies
2. localStorage
3. sessionStorage

Cookies are generally used for authorization as they are a way for the server and client to talk before sending and receiving documents. Cookies are great for limiting the life of the data as they have expiration properties which allow you to define how long a cookie will exist. A downside to tookies are that they do require communication between the client and server. Another downside is the limited memory of cookies and limited number of possible cookies, as most browsers do not support more than 20.

Another type of storage is sessionStorage. It is very similar to localStorage, except that it does not persist past the tab or window being closed. localStorage does persist across sessions and is permanent. It will only be removed if manually commanded. Both localStorage and sessionStorage have large memory spaces, so you do not have the same issues as with cookies. They are completely client side, so they do not run into issues with having to talk to the server.

We are using localStorage because it persists between sessions, so any person that is using our checklist will be able to keep their progress, even if they turn off their computer or phone. There will be a button that will reset all the checkboxes as well.
