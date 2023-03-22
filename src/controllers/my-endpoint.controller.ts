import { Controller, Get } from "@nestjs/common";
import { ApiTags, ApiResponse, ApiOperation } from "@nestjs/swagger";

@ApiTags("My Endpoint")
@Controller("my-endpoint")
export class MyEndpointController {
  @Get()
  @ApiOperation({ summary: "Get all items" })
  @ApiResponse({ status: 200, description: "Success" })
  findAll() {
    return "This action returns all items";
  }
}
