import { Application } from "express";

import teamController from "../controllers/team.controller";
import leagueController from "../controllers/league.controller";

export default (server: Application) => {

  /**
   * @api {get} /api/team/:teamId Find a team and all its Players
   * @apiName GetTeam
   * @apiGroup Team
   *
   * @apiParam {Number} teamId Team's unique ID.
   *
   * @apiSuccess {Boolean} error Has the request encountered an error.
   * @apiSuccess {Number} statusCode Request status code.
   * @apiSuccess {String} data._id Unique ID of the Team.
   * @apiSuccess {String} data.name Name of the Team.
   * @apiSuccess {String} data.thumbnail Photo of the Team.
   * @apiSuccess {String} data.players.name Name of the Player.
   * @apiSuccess {String} data.players.thumbnail Photo of the Player.
   * @apiSuccess {String} data.players.position Game position of the Player.
   * @apiSuccess {Number} data.players.signin.amount Price of the Player.
   * @apiSuccess {String} data.players.signin.currency Price currency of the Player.
   * @apiSuccess {Date} data.players.born Birth date of the Player.
   * @apiSuccess {Number} total Amount of items in response.
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "error": false,
   *      "statusCode": 200,
   *      "data": [
   *        {
   *          "_id": "5d2d8f60da07b95bb8f17170",
   *          "name": "Olivier Giroud",
   *          "thumbnail": "https://www.thesportsdb.com/images/media/player/cutout/pe0azg1557049473.png",
   *          "position": "Forward",
   *          "signin": {
   *            "amount": 18000000,
   *            "currency": "gpp"
   *          },
   *          "born": "1986-10-01T04:49:19.198Z"
   *        }
   *      ]
   *      "total": 1
   *    }
   * @apiErrorExample {json} Task not found
   *    HTTP/1.1 404 Not Found
   * @apiErrorExample {json} Find error
   *    HTTP/1.1 500 Internal Server Error
   *
   */
  server.get(`/api/team/:teamId`, teamController.getTeam)

  /**
   * @api {get} /api/league Find all Leagues
   * @apiName GetLeagues
   * @apiGroup League
   *
   * @apiSuccess {Boolean} error Has the request encountered an error.
   * @apiSuccess {Number} statusCode Request status code.
   * @apiSuccess {String} data._id Unique ID of the League.
   * @apiSuccess {String[]} data.teams List of League's Teams unique ID.
   * @apiSuccess {String} data.name Name of the League.
   * @apiSuccess {String} data.sport Sport of the League.
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "error": false,
   *      "statusCode": 200,
   *      "data": [
   *        {
   *          "teams": [
   *            "5d2d01fdda07b95bb8f16f0a",
   *            "5d2d02d7da07b95bb8f16f2a",
   *            "5d2d8f60da07b95bb8f17170"
   *          ],
   *          "_id": "5d2cdcf7da07b95bb8f16ed1",
   *          "name": "English Premier League",
   *          "sport": "soccer"
   *        },
   *        {
   *          "teams": [
   *
   *          ],
   *          "_id": "5d2cdd30da07b95bb8f16ed9",
   *          "name": "French Ligue 1",
   *          "sport": "soccer"
   *        }
   *      ]
   *    }
   * @apiErrorExample {json} Find error
   *    HTTP/1.1 500 Internal Server Error
   *
   */
  server.get(`/api/league`, leagueController.getAll);

  /**
   * @api {get} /api/league/:leagueId/teams Find all League's Teams
   * @apiName GetLeagueTeams
   * @apiGroup League
   *
   * @apiSuccess {Boolean} error Has the request encountered an error.
   * @apiSuccess {Number} statusCode Request status code.
   * @apiSuccess {String} data._id Unique ID of the Team.
   * @apiSuccess {String} data.name Name of the Team.
   * @apiSuccess {String} data.thumbnail Logo of the Team.
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "error": false,
   *      "statusCode": 200,
   *      "data": [
   *        {
   *          "_id": "5d2cdcf7da07b95bb8f16ed1",
   *          "name": "Arsenal",
   *          "thumbnail": "https://www.thesportsdb.com//images//media//team//badge//a1af2i1557005128.png"
   *        },
   *        {
   *          "_id": "5d2cdcf7da07b95bb8f16ed1",
   *          "name": "Manchester City",
   *          "thumbnail": "https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png"
   *        }
   *      ],
   *      "total": 3
   *    }
   * @apiErrorExample {json} Find error
   *    HTTP/1.1 500 Internal Server Error
   * @apiErrorExample {json} Task not found
   *    HTTP/1.1 404 Not Found
   *
   */
  server.get(`/api/league/:leagueId/teams`, leagueController.getLeagueTeams)
}
