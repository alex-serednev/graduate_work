import { Environment } from './enums/environment.enum';
import { UserModel } from './models/user/userModel';

export class ConfigData {
  public static admin(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.QA:
        return {
          email: 'root@root.com',
          password: '1234567891',
          id: 1,
        };
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'mngrs01@test.com',
          password: '123123123',
          id: 1,
        };
    }
  }

  public static teacher(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.QA:
        return {
          email: 'oldteacheraccount@test.test',
          password: '123123123',
          id: 14003,
        };
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'oldteacheraccount@test.test',
          password: '123123123',
          id: 619298,
        };
    }
  }

  public static teacherNotClass(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'newteacheraccount@test.test',
          password: '123123123',
          id: 3979,
        };
    }
  }

  public static teacherGroupClass(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.QA:
        return {
          email: 'newteacheraccount@test.test',
          password: '123123123',
          id: 18593,
        };
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'groupteacheraccount@test.test',
          password: '123123123',
          id: 1567745,
        };
    }
  }

  public static parent(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.QA:
        return {
          email: 'newparentaccount@test.test',
          password: '123123123',
          phone: '+79991231212',
          id: 14183,
          studentId: 5436,
        };
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'newparentaccount@test.test',
          password: '123123123',
          phone: '+79991231212',
          id: 612975,
          studentId: 560388,
        };
    }
  }

  public static parentAutoPaid(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.QA:
        return {
          email: 'parenttestparent@list.ru',
          password: '123123123',
          phone: '+79212239999',
          id: 15855,
          studentId: 7228,
        };
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'vyacheslauto@test.com',
          password: '123123123',
          phone: '+799334',
          id: 847875,
          studentId: 758552,
        };
    }
  }

  public static parentNewSubscription(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'newsubparentaccount@test.test',
          password: '123123123',
          id: 983348,
          studentId: 834142,
        };
    }
  }

  public static parentTrialStudent(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'newparentaccounttrial@test.test',
          password: '123123123',
          id: 745941,
          studentId: 673348,
        };
    }
  }

  public static parentAccountVisual(): UserModel {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
      case Environment.Canary:
        return {
          email: 'newparentaccountvisual@test.test',
          password: '123123123',
          id: 1006770,
          studentId: 846386,
        };
    }
  }

  public static apiUrl(): string {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
        return 'https://api.novakidschool.com/api/0/';
      case Environment.Canary:
        return 'https://api-c.novakidschool.com/api/0/';
      case Environment.QA:
        return 'https://api-qa.novakidschool.com/api/0/';
    }
  }

  public static groupApiUrl(): string {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
        return 'https://api-group-classroom.novakidschool.com/api/0/';
      case Environment.QA:
        return 'https://api-group-classroom-qa.novakidschool.com/api/0/';
    }
  }

  public static wabUrl(): string {
    switch (ConfigData.getEnvironment()) {
      case Environment.Prod:
      case Environment.Canary:
        return 'https://wab.novakidschool.com/';
    }
  }

  public static bageUrl(): string {
    const environmentEnv = ConfigData.getEnvironment();

    switch (environmentEnv) {
      case Environment.Prod:
        return 'https://school.novakidschool.com/';
      case Environment.Canary:
        return 'https://c.novakidschool.com/';
      case Environment.QA:
        return 'https://qa.novakidschool.com/';
      default:
        return 'https://school.novakidschool.com/';
    }
  }
  public static getEnvironment(): Environment {
    const environmentEnv = process.env.STAGING;

    switch (environmentEnv) {
      case Environment.Prod:
        return Environment.Prod;
      case Environment.Canary:
        return Environment.Canary;
      case Environment.QA:
        return Environment.QA;
      default:
        return Environment.QA;
    }
  }
}
