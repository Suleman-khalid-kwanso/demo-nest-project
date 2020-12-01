"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalController = void 0;
const common_1 = require("@nestjs/common");
const global_service_1 = require("./global.service");
let GlobalController = class GlobalController {
    constructor(globalService) {
        this.globalService = globalService;
    }
    setGlobal() {
        return this.globalService.globalValue();
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GlobalController.prototype, "setGlobal", null);
GlobalController = __decorate([
    common_1.Controller('global'),
    __metadata("design:paramtypes", [global_service_1.GlobalService])
], GlobalController);
exports.GlobalController = GlobalController;
//# sourceMappingURL=global.controller.js.map