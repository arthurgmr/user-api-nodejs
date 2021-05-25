import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) { }

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    try {
      const users = this.listAllUsersUseCase.execute({ user_id });
      console.log(users);
      return response.json(users);
    } catch (error) {
      console.log(error);
      return response.status(400).json({ error: "User not is admin!" });
    }
  }
}

export { ListAllUsersController };
