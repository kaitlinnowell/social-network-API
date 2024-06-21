const users = [
    {username: 'knowell', email: 'kaitlin.nowell@gmail.com'},
    {username: 'ahernandez', email: 'ahernandez@gmail.com'},
    {username: 'ctorrez', email: 'ctorrez@hotmail.com'},
    {username: 'nquitero', email: 'nquitero1@aol.com'},
]

const reactions = [
    {reactionBody: 'they really are!', username: 'ctorrez'},
    {reactionBody: 'Probably SQL', username: 'nquitero'},
    {reactionBody: 'I wish I knew...', username: 'knowell'},
    {reactionBody: "I'd like to but I'm so busy!", username: 'ahernandez'},
]

const thoughts = [
    {thoughtText: 'Puppies are cute!', username: 'knowell', reactions: [reactions[0]]},
    {thoughtText: 'Would you rather use SQL or NoSQL?', username: 'ahernandez', reactions: [reactions[1]]},
    {thoughtText: 'Seeking recommendations for foundation repair', username: 'ctorrez', reactions: [reactions[2]]},
    {thoughtText: 'Anyone want to go on a bike ride this weekend?', username: 'nquitero', reactions: [reactions[3]]},
]



module.exports = {users, thoughts}