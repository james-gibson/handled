import { Controller, Get, Req, Res } from "@nestjs/common";
import { Request, Response } from "express";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("hi")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("*")
  getRoot(@Req() request: Request): string {
    return this.appService.getRoot({ request, response: undefined });
  }
}
