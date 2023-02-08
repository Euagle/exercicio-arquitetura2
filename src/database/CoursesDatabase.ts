


import { TCourses } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class CousersDataBase extends BaseDatabase {
   public static TABLE_Courses = "courses"
   public async findCourses(q :string | undefined){
    let courses

    if(q){
        const result  :TCourses[] = await BaseDatabase.connection(CousersDataBase.TABLE_Courses).where("name", "LIKE", `%${q}%`)
        courses = result

    }
    else{
        const result :TCourses[] = await BaseDatabase.connection(CousersDataBase.TABLE_Courses)
        courses = result

    }
    return courses;
   }
}
