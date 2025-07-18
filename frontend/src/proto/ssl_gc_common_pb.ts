// @generated by protoc-gen-es v2.2.5 with parameter "target=ts,json_types=true"
// @generated from file ssl_gc_common.proto (syntax proto2)
 

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file ssl_gc_common.proto.
 */
export const file_ssl_gc_common: GenFile = /*@__PURE__*/
  fileDesc("ChNzc2xfZ2NfY29tbW9uLnByb3RvIioKB1JvYm90SWQSCgoCaWQYASABKA0SEwoEdGVhbRgCIAEoDjIFLlRlYW0qKQoEVGVhbRILCgdVTktOT1dOEAASCgoGWUVMTE9XEAESCAoEQkxVRRACKjEKCERpdmlzaW9uEg8KC0RJVl9VTktOT1dOEAASCQoFRElWX0EQARIJCgVESVZfQhACQj9aPWdpdGh1Yi5jb20vUm9ib0N1cC1TU0wvc3NsLWdhbWUtY29udHJvbGxlci9pbnRlcm5hbC9hcHAvc3RhdGU");

/**
 * RobotId is the combination of a team and a robot id
 *
 * @generated from message RobotId
 */
export type RobotId = Message<"RobotId"> & {
  /**
   * the robot number
   *
   * @generated from field: optional uint32 id = 1;
   */
  id: number;

  /**
   * the team that the robot belongs to
   *
   * @generated from field: optional Team team = 2;
   */
  team: Team;
};

/**
 * RobotId is the combination of a team and a robot id
 *
 * @generated from message RobotId
 */
export type RobotIdJson = {
  /**
   * the robot number
   *
   * @generated from field: optional uint32 id = 1;
   */
  id?: number;

  /**
   * the team that the robot belongs to
   *
   * @generated from field: optional Team team = 2;
   */
  team?: TeamJson;
};

/**
 * Describes the message RobotId.
 * Use `create(RobotIdSchema)` to create a new message.
 */
export const RobotIdSchema: GenMessage<RobotId, RobotIdJson> = /*@__PURE__*/
  messageDesc(file_ssl_gc_common, 0);

/**
 * Team is either blue or yellow
 *
 * @generated from enum Team
 */
export enum Team {
  /**
   * team not set
   *
   * @generated from enum value: UNKNOWN = 0;
   */
  UNKNOWN = 0,

  /**
   * yellow team
   *
   * @generated from enum value: YELLOW = 1;
   */
  YELLOW = 1,

  /**
   * blue team
   *
   * @generated from enum value: BLUE = 2;
   */
  BLUE = 2,
}

/**
 * Team is either blue or yellow
 *
 * @generated from enum Team
 */
export type TeamJson = "UNKNOWN" | "YELLOW" | "BLUE";

/**
 * Describes the enum Team.
 */
export const TeamSchema: GenEnum<Team, TeamJson> = /*@__PURE__*/
  enumDesc(file_ssl_gc_common, 0);

/**
 * Division denotes the current division, which influences some rules
 *
 * @generated from enum Division
 */
export enum Division {
  /**
   * @generated from enum value: DIV_UNKNOWN = 0;
   */
  DIV_UNKNOWN = 0,

  /**
   * @generated from enum value: DIV_A = 1;
   */
  DIV_A = 1,

  /**
   * @generated from enum value: DIV_B = 2;
   */
  DIV_B = 2,
}

/**
 * Division denotes the current division, which influences some rules
 *
 * @generated from enum Division
 */
export type DivisionJson = "DIV_UNKNOWN" | "DIV_A" | "DIV_B";

/**
 * Describes the enum Division.
 */
export const DivisionSchema: GenEnum<Division, DivisionJson> = /*@__PURE__*/
  enumDesc(file_ssl_gc_common, 1);

