const logs = [
    { "timestamp": "2024-09-15T08:23:45Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:25:12Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 123" },
    { "timestamp": "2024-09-15T08:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-15T08:40:22Z", "user": "Bob", "action": "REQUEST", "details": "Requested resource 124" },
    { "timestamp": "2024-09-15T08:42:08Z", "user": "Bob", "action": "ERROR", "details": "Database connection failed" },
    { "timestamp": "2024-09-15T08:45:15Z", "user": "Alice", "action": "LOGIN", "details": "User Alice logged in" },
    { "timestamp": "2024-09-15T08:50:30Z", "user": "Alice", "action": "REQUEST", "details": "Requested resource 125" },
    { "timestamp": "2024-09-15T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-15T09:27:30Z", "user": "Alice", "action": "LOGOUT", "details": "User Alice logged out" },
    { "timestamp": "2024-09-15T09:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" },
    { "timestamp": "2024-09-16T08:35:11Z", "user": "Bob", "action": "LOGIN", "details": "User Bob logged in" },
    { "timestamp": "2024-09-16T08:55:45Z", "user": "Bob", "action": "ERROR", "details": "File not found" },
    { "timestamp": "2024-09-16T10:00:00Z", "user": "Bob", "action": "LOGOUT", "details": "User Bob logged out" }
];

// Log processing function
function processLogs(logs) {
    const info = [] //[0] store totalAction [1] store totalError [2] store Durationsession 
    const users = getUser(logs)
    info.push(countAcionUser(logs, users))
    info.push(getSession(logs,users))
    info.push(countErrorAction(logs, users))

    return{
        totalActionsPerUser : info[0],
        sessionDurations : info[1],
        errorCount: info[2],
        mostActiveUser : findMostActive(info[0])
    }
}

function getUser(logs){
    const list_user = [];
    logs.forEach(person => { 
        if (!list_user.includes(person.user)) {
            list_user.push(person.user)
        }
    });

    return list_user;
}

function countAcionUser(logs,list_user){
    const totalAction = {}
    list_user.forEach(user => {
        let count = 0
        logs.forEach(log => {
            if (log.user === user) {
                count++
            }
        });
        totalAction[user] = count > 0 ? count : 0
    })
    return totalAction
}

function getSession(logs,list_user){
    const totalSession = {}
    list_user.forEach(person => {
        const timeArray = []
        let first_login 

        logs.forEach(log => {
            if (person === log.user && log.action === "LOGIN") {
                first_login = new Date(log.timestamp)
            } else if (person === log.user && log.action === "LOGOUT" && first_login) {
                const last_login = new Date(log.timestamp)
                const diffInMinute = Math.round((last_login - first_login) / 60000)
                timeArray.push(diffInMinute)
                first_login = ''
            }
        });

        
        totalSession[person] = timeArray.length > 0 ? timeArray : [0]
    });
    return totalSession
}
function countErrorAction(logs,list_user){
    const totalError = {}
    list_user.forEach(user => {
        let count = 0
        logs.forEach(log => {
            if(user === log.user && log.action === "ERROR") count++
        })
        totalError[user] = count > 0 ? count : 0
    })
    return totalError
}
function findMostActive(info){
    if (Object.keys(info).length === 0) {
        return ""; 
    }
    else {
        const max =  Math.max(...Object.values(info))
        for(let user in info)
            if(info[user] == max) return user
    }
}
const report = processLogs(logs);
console.log(report);

/*
Expected Output:
{
    totalActionsPerUser: { Alice: 6, Bob: 8 },
    sessionDurations: { Alice: [4, 42], Bob: [25, 85] },
    errorCount: { Alice: 0, Bob: 3 },
    mostActiveUser: 'Bob'
}
*/


module.exports = processLogs;
