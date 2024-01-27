import { connect } from "mongoose";
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true";

const connectTomongo = async () => {
 await connect(mongoURI);
};

export default connectTomongo;
