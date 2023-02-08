import express, { Request, Response} from 'express';
import cors from 'cors';
import { coursesRouter } from './router/CoursesRouter';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});

app.get("/ping", async (req: Request, res: Response) => {
  res.send("Pong!");
});



// const coursesController = new CoursesController()

app.use("/courses", coursesRouter)




