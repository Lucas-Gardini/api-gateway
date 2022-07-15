import { Controller, Get, Next, Req, Res } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import * as httpProxy from "express-http-proxy";

@Controller()
export class AppController {
	@Get()
	redirectRequest(
		@Req() req: Request,
		@Res() res: Response,
		@Next() next: NextFunction,
	): void {
		const path = "api/users/random_user";
		httpProxy("https://random-data-api.com/", {
			parseReqBody: true,
			proxyReqPathResolver: function (req) {
				return req.path + path;
			},
		})(req, res, next);
	}

	@Get("/facebook")
	redirectRequestFacebook(
		@Req() req: Request,
		@Res() res: Response,
		@Next() next: NextFunction,
	): void {
		return httpProxy("https://facebook.com", {
			proxyReqPathResolver: function (req) {
				console.log(req.path + "/../");
				return req.path + "/../"; // Sem retornar "/", ele redireciona para facebook.com/facebook
			},
		})(req, res, next);
	}
}
