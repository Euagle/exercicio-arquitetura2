import { Request, Response } from "express"
import { CoursesBusiness } from "../business/CoursesBusiness";

export class CoursesController {
   public getCourses =  async (req: Request, res: Response) =>{
    
    try {
        const q = req.query.q as string | undefined;

        const coursesBusiness = new  CoursesBusiness()
        const output = await coursesBusiness.getCourses(q)

        

        res.status(200).send(output)

    } catch (error) {
        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }



}
}

