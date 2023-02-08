import { CousersDataBase } from "../database/CoursesDatabase"

export class CoursesBusiness{
    public async getCourses(q: string){
        const coursesDabase = new CousersDataBase()
        const coursesDB= await coursesDabase.findCourses(q)
    return coursesDB

    }
}