import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloService } from './hello/hello.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService, private readonly helloService: HelloService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello')
  printHello(): string{
    return this.helloService.getHello();
  }
}
