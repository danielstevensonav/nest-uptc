import { EntityTarget, getConnection, ObjectLiteral } from "typeorm";

export class Utilities {

    static async deleteWhere<T>(entityTarget: EntityTarget<T>, where: string, ObjectLiteral?: ObjectLiteral) {
        return await getConnection()
        .createQueryBuilder()
        .delete()
        .from(entityTarget)
        .where(where, ObjectLiteral)
        .execute();
    }

}