import {Body, Controller, Post, Headers} from '@nestjs/common';
import {EntitiesService} from "./entities.service";

@Controller('entities')
export class EntitiesController {

    constructor(private entitiesService: EntitiesService) {
    }

    @Post('/create')
    createEntity(@Body() data: any) {
        return this.entitiesService.createEntity(data)
    }

}
