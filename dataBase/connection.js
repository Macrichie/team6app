var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
var con=''
if(env=='dev') {
    con ='mongodb://localhost:27017/quizproject'
}
else
{
    con='mongodb://adminquiz:adminquiz@ds147497.mlab.com:47497/quizproject';
}
console.log(con);
exports.connectionString= con;