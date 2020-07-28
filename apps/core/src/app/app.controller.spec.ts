import { Test, TestingModule } from "@nestjs/testing";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { IntakeService } from "@handled/intake";
import { PostgresService } from "@handled/postgres";
import { DarkskyService } from "@handled/darksky";

describe("AppController", () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, IntakeService, PostgresService, DarkskyService],
    }).compile();
  });

  describe("getData", () => {
    it('should return "Welcome to core!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({ message: "Welcome to core!" });
    });
  });
});
