import {MongoClient} from `mongoDB` //{} meansdestructuring the data library and getting just what we need
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.ATLAS_URI || "";

const client = new MongoClient
(connectionString)
//because its mjs it assumes its async and no need to add
let conn;
try {
    conn = await client.connect()
} catch (e) {
    console.error(e)
}
let db = conn.db("sample_training");
export default db;

//GET route that sends grade data by _id.




//GET route that sends all data for a specified student_id.



//GET route that sends all data for a specified class_id.



//GET route that sends the data for a specified combination of student_id and class_id.



//GET route that sends the weighted average score for each class for a student.



//GET route that sends the overall weighted average score for a student.