import { Application } from 'lisk-sdk';
import { RankModule } from "./modules/rank/rank_module";

export const registerModules = (app: Application): void => {
    app.registerModule(RankModule);
};
