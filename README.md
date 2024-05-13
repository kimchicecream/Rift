# babbl

## Database Schema Design
![db-schema](babbl-schema.png)

```
Table Users {
  id int [primary key]
  firstName varchar
  lastName varchar
  email varchar
  username varchar
  hashedPassword varchar
}

Table Servers {
  id int [primary key]
  name varchar
  creatorId int
}

Table Channels {
  id int [primary key]
  name varchar
  serverId int
  creatorId int
}

Table Messages {
  id int [primary key]
  userId int
  channelId int
}

Table Reactions {
  id int [primary key]
  messageId int
  userId int
}

Table ServerMembership {
  id int [primary key]
  userId int
  serverId int
}

Table ChannelMembership {
  id int [primary key]
  userId int
  channelId int
}

Ref: Users.id < ServerMembership.userId
Ref: Users.id < ChannelMembership.userId
Ref: Users.id < Reactions.userId
Ref: Users.id < Messages.userId
Ref: Servers.id < ServerMembership.serverId
Ref: Servers.id < Channels.serverId
Ref: Channels.id < ChannelMembership.channelId
Ref: Channels.id < Messages.channelId
Ref: Messages.id < Reactions.messageId
```

## Feature List
### 1. New account creation, log in, log out, and guest/demo login
* Users can sign up, log in, and log out.
* Users can use a demo log in to try the site.
* Users can't use any messaging without logging in
* Logged in users are directed to their profile page which displays their Servers
* Logged out users are directed to a page displaying several recent public messages

### 2. Servers
- Users should be able to view all publicly created servers.
- Users should be able to create new servers.
- Users should be able to update servers they created.
- Users should be able to delete servers they created.

### 3. Channels
- Users should be able to view all public channels in a server.
- Users should be able to create new channels in a server they own.
- Users should be able to update channels they created.
- Users should be able to delete channels they created.

### 4. Messages
- Users should be able to view all messages in a channel.
- Users should be able to create new messages.
- Users should be able to update messages they sent.
- Users should be able to delete messages they sent.

### 5. Reactions
 - Users should be able to view all reactions on a message.
 - Users should be able to add reactions to a message.
 - Users should be able to remove their reaction(s) from a message.

### 6. BONUS: Threads
- Users should be able to view all threads within a channel.
- Users should be able to create a thread off of a message.

### 7. Bonus: Direct Messages
- Users should be able to view all direct messages between them and another user.
- Users should be able to create new direct messages.
- Users should be able to update messages they sent.
- Users should be able to delete messages they sent.
