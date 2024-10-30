/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum BlankEnum {
  Value = "",
}

export interface Company {
  id: number;
  brand?: number;
  /** @maxLength 100 */
  name?: string | null;
  type_of_company?: TypeOfCompanyEnum | BlankEnum | NullEnum | null;
  number_of_teammates?: NumberOfTeammatesEnum | BlankEnum | NullEnum | null;
  number_of_clients?: NumberOfClientsEnum | BlankEnum | NullEnum | null;
  address?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state?: string | null;
  /** @maxLength 100 */
  country?: string | null;
  /** @maxLength 100 */
  zipcode?: string | null;
  /** @maxLength 100 */
  phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  description?: string | null;
  /** @format date-time */
  created_at: string;
  /** @format date-time */
  updated_at: string;
  is_active?: boolean;
  is_verified?: boolean;
  is_featured?: boolean;
}

/**
 * * `Barbell` - Barbell
 * * `Dumbbell` - Dumbbell
 * * `Kettlebell` - Kettlebell
 * * `Medicine Ball` - Medicine Ball
 * * `Resistance Bands` - Resistance Bands
 * * `TRX` - TRX
 * * `Bosu Ball` - Bosu Ball
 * * `Stability Ball` - Stability Ball
 * * `Sandbag` - Sandbag
 * * `Sled` - Sled
 * * `Battle Ropes` - Battle Ropes
 * * `Plyo Box` - Plyo Box
 * * `Foam Roller` - Foam Roller
 * * `Yoga Mat` - Yoga Mat
 * * `Jump Rope` - Jump Rope
 * * `Pull Up Bar` - Pull Up Bar
 * * `Box` - Box
 * * `Bench` - Bench
 * * `Rings` - Rings
 * * `Parallettes` - Parallettes
 * * `Tire` - Tire
 * * `Squat Rack` - Squat Rack
 * * `Peg Board` - Peg Board
 * * `Climbing Rope` - Climbing Rope
 * * `Ski Erg` - Ski Erg
 * * `Rowing Machine` - Rowing Machine
 * * `Air Bike` - Air Bike
 * * `Treadmill` - Treadmill
 * * `Elliptical` - Elliptical
 * * `Stairmaster` - Stairmaster
 * * `Spin Bike` - Spin Bike
 * * `Other` - Other
 */
export enum EquipmentEnum {
  Barbell = "Barbell",
  Dumbbell = "Dumbbell",
  Kettlebell = "Kettlebell",
  MedicineBall = "Medicine Ball",
  ResistanceBands = "Resistance Bands",
  TRX = "TRX",
  BosuBall = "Bosu Ball",
  StabilityBall = "Stability Ball",
  Sandbag = "Sandbag",
  Sled = "Sled",
  BattleRopes = "Battle Ropes",
  PlyoBox = "Plyo Box",
  FoamRoller = "Foam Roller",
  YogaMat = "Yoga Mat",
  JumpRope = "Jump Rope",
  PullUpBar = "Pull Up Bar",
  Box = "Box",
  Bench = "Bench",
  Rings = "Rings",
  Parallettes = "Parallettes",
  Tire = "Tire",
  SquatRack = "Squat Rack",
  PegBoard = "Peg Board",
  ClimbingRope = "Climbing Rope",
  SkiErg = "Ski Erg",
  RowingMachine = "Rowing Machine",
  AirBike = "Air Bike",
  Treadmill = "Treadmill",
  Elliptical = "Elliptical",
  Stairmaster = "Stairmaster",
  SpinBike = "Spin Bike",
  Other = "Other",
}

/**
 * * `Strength` - Strength
 * * `Bodyweight` - Bodyweight
 * * `Timed` - Timed
 * * `Distance (Long)` - Distance (Long)
 * * `Distance (Short)` - Distance (Short)
 */
export enum ExcerciseCategoryEnum {
  Strength = "Strength",
  Bodyweight = "Bodyweight",
  Timed = "Timed",
  DistanceLong = "Distance (Long)",
  DistanceShort = "Distance (Short)",
}

export interface Exercise {
  id: number;
  company: number;
  user: number[];
  /** @maxLength 100 */
  name: string;
  modality?: ModalityEnum | BlankEnum | NullEnum | null;
  muscle_group?: MuscleGroupEnum | BlankEnum | NullEnum | null;
  movement_pattern?: MovementPatternEnum | BlankEnum | NullEnum | null;
  excercise_category?: ExcerciseCategoryEnum | BlankEnum | NullEnum | null;
  tracking_field?: TrackingFieldEnum | BlankEnum | NullEnum | null;
  instructions?: string | null;
  /** @format date-time */
  time_created: string;
  /** @format date-time */
  time_updated: string;
  /** @format uri */
  video_file?: string | null;
  /** @format uri */
  photos?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  equipment?: EquipmentEnum | BlankEnum | NullEnum | null;
  /** @maxLength 100 */
  tags?: string | null;
}

/**
 * * `Balance` - Balance
 * * `Bodybuilding` - Bodybuilding
 * * `Cardio` - Cardio
 * * `Endurance` - Endurance
 * * `Flexibility` - Flexibility
 * * `Functional` - Functional
 * * `High Intensity` - High Intensity
 * * `Hypertrophy` - Hypertrophy
 * * `Mobility` - Mobility
 * * `Power` - Power
 * * `Plyometrics` - Plyometrics
 * * `Strength` - Strength
 * * `Speed` - Speed
 * * `Stability` - Stability
 * * `Weight Loss` - Weight Loss
 * * `Weight Gain` - Weight Gain
 * * `Activation` - Activation
 * * `Agility` - Agility
 * * `Other` - Other
 */
export enum ModalityEnum {
  Balance = "Balance",
  Bodybuilding = "Bodybuilding",
  Cardio = "Cardio",
  Endurance = "Endurance",
  Flexibility = "Flexibility",
  Functional = "Functional",
  HighIntensity = "High Intensity",
  Hypertrophy = "Hypertrophy",
  Mobility = "Mobility",
  Power = "Power",
  Plyometrics = "Plyometrics",
  Strength = "Strength",
  Speed = "Speed",
  Stability = "Stability",
  WeightLoss = "Weight Loss",
  WeightGain = "Weight Gain",
  Activation = "Activation",
  Agility = "Agility",
  Other = "Other",
}

/**
 * * `Horizontal Push` - Horizontal Push
 * * `Horizontal Pull` - Horizontal Pull
 * * `Vertical Push` - Vertical Push
 * * `Vertical Pull` - Vertical Pull
 * * `Squat` - Squat
 * * `Hinge` - Hinge
 * * `Lunge` - Lunge
 * * `Twist` - Twist
 * * `Gait` - Gait
 * * `Push` - Push
 * * `Pull` - Pull
 * * `Carry` - Carry
 * * `Other` - Other
 */
export enum MovementPatternEnum {
  HorizontalPush = "Horizontal Push",
  HorizontalPull = "Horizontal Pull",
  VerticalPush = "Vertical Push",
  VerticalPull = "Vertical Pull",
  Squat = "Squat",
  Hinge = "Hinge",
  Lunge = "Lunge",
  Twist = "Twist",
  Gait = "Gait",
  Push = "Push",
  Pull = "Pull",
  Carry = "Carry",
  Other = "Other",
}

/**
 * * `Abdominals` - Abdominals
 * * `Adductors` - Adductors
 * * `Biceps` - Biceps
 * * `Calves` - Calves
 * * `Chest` - Chest
 * * `Forearms` - Forearms
 * * `Glutes` - Glutes
 * * `Hamstrings` - Hamstrings
 * * `Lats` - Lats
 * * `Lower Back` - Lower Back
 * * `Middle Back` - Middle Back
 * * `Neck` - Neck
 * * `Quadriceps` - Quadriceps
 * * `Shoulders` - Shoulders
 * * `Traps` - Traps
 * * `Triceps` - Triceps
 * * `Other` - Other
 */
export enum MuscleGroupEnum {
  Abdominals = "Abdominals",
  Adductors = "Adductors",
  Biceps = "Biceps",
  Calves = "Calves",
  Chest = "Chest",
  Forearms = "Forearms",
  Glutes = "Glutes",
  Hamstrings = "Hamstrings",
  Lats = "Lats",
  LowerBack = "Lower Back",
  MiddleBack = "Middle Back",
  Neck = "Neck",
  Quadriceps = "Quadriceps",
  Shoulders = "Shoulders",
  Traps = "Traps",
  Triceps = "Triceps",
  Other = "Other",
}

export interface MyTokenObtainPair {
  email: string;
  password: string;
}

export type NullEnum = null;

/**
 * * `1-10` - 1-10
 * * `11-50` - 11-50
 * * `51-100` - 51-100
 * * `101-500` - 101-500
 * * `501-1000` - 501-1000
 * * `1000+` - 1000+
 */
export enum NumberOfClientsEnum {
  Value110 = "1-10",
  Value1150 = "11-50",
  Value51100 = "51-100",
  Value101500 = "101-500",
  Value5011000 = "501-1000",
  Value1000 = "1000+",
}

/**
 * * `1-10` - 1-10
 * * `11-50` - 11-50
 * * `51-100` - 51-100
 * * `101-500` - 101-500
 * * `501-1000` - 501-1000
 * * `1000+` - 1000+
 */
export enum NumberOfTeammatesEnum {
  Value110 = "1-10",
  Value1150 = "11-50",
  Value51100 = "51-100",
  Value101500 = "101-500",
  Value5011000 = "501-1000",
  Value1000 = "1000+",
}

export interface PaginatedCompanyList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results: Company[];
}

export interface PaginatedExerciseList {
  /** @example 123 */
  count: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results: Exercise[];
}

export interface PatchedCompany {
  id?: number;
  brand?: number;
  /** @maxLength 100 */
  name?: string | null;
  type_of_company?: TypeOfCompanyEnum | BlankEnum | NullEnum | null;
  number_of_teammates?: NumberOfTeammatesEnum | BlankEnum | NullEnum | null;
  number_of_clients?: NumberOfClientsEnum | BlankEnum | NullEnum | null;
  address?: string | null;
  /** @maxLength 100 */
  city?: string | null;
  /** @maxLength 100 */
  state?: string | null;
  /** @maxLength 100 */
  country?: string | null;
  /** @maxLength 100 */
  zipcode?: string | null;
  /** @maxLength 100 */
  phone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  website?: string | null;
  description?: string | null;
  /** @format date-time */
  created_at?: string;
  /** @format date-time */
  updated_at?: string;
  is_active?: boolean;
  is_verified?: boolean;
  is_featured?: boolean;
}

export interface PatchedExercise {
  id?: number;
  company?: number;
  user?: number[];
  /** @maxLength 100 */
  name?: string;
  modality?: ModalityEnum | BlankEnum | NullEnum | null;
  muscle_group?: MuscleGroupEnum | BlankEnum | NullEnum | null;
  movement_pattern?: MovementPatternEnum | BlankEnum | NullEnum | null;
  excercise_category?: ExcerciseCategoryEnum | BlankEnum | NullEnum | null;
  tracking_field?: TrackingFieldEnum | BlankEnum | NullEnum | null;
  instructions?: string | null;
  /** @format date-time */
  time_created?: string;
  /** @format date-time */
  time_updated?: string;
  /** @format uri */
  video_file?: string | null;
  /** @format uri */
  photos?: string | null;
  /**
   * @format uri
   * @maxLength 200
   */
  video_url?: string | null;
  equipment?: EquipmentEnum | BlankEnum | NullEnum | null;
  /** @maxLength 100 */
  tags?: string | null;
}

export interface PatchedUser {
  id?: number;
  company?: Company;
  /** @maxLength 128 */
  password?: string;
  /**
   * Superuser status
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser?: boolean;
  /** @maxLength 40 */
  first_name?: string | null;
  /** @maxLength 40 */
  last_name?: string | null;
  /** @maxLength 13 */
  cellphone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @format date-time */
  last_login?: string | null;
  /** @format date-time */
  date_joined?: string | null;
  /** @maxLength 100 */
  company_name?: string | null;
  is_coach?: boolean;
  is_admin?: boolean;
  is_active?: boolean;
  is_staff?: boolean;
  is_registration_complete?: boolean;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups?: number[];
  /** Specific permissions for this user. */
  user_permissions?: number[];
}

export interface TokenRefresh {
  access: string;
  refresh: string;
}

/**
 * * `Reps` - Reps
 * * `Time` - Time
 * * `Distance` - Distance
 * * `Weight` - Weight
 * * `Sets` - Sets
 * * `Rounds` - Rounds
 * * `Calories` - Calories
 * * `Other` - Other
 */
export enum TrackingFieldEnum {
  Reps = "Reps",
  Time = "Time",
  Distance = "Distance",
  Weight = "Weight",
  Sets = "Sets",
  Rounds = "Rounds",
  Calories = "Calories",
  Other = "Other",
}

/**
 * * `gym` - gym
 * * `fitness_center` - fitness_center
 * * `yoga_center` - yoga_center
 * * `dance_center` - dance_center
 * * `nutrition_center` - nutrition_center
 * * `physiotherapy_center` - physiotherapy_center
 * * `psychology_center` - psychology_center
 * * `counselling_center` - counselling_center
 * * `life_coaching_center` - life_coaching_center
 * * `career_coaching_center` - career_coaching_center
 * * `business_coaching_center` - business_coaching_center
 * * `academic_coaching_center` - academic_coaching_center
 * * `music_center` - music_center
 * * `art_center` - art_center
 * * `craft_center` - craft_center
 * * `language_center` - language_center
 * * `other` - other
 */
export enum TypeOfCompanyEnum {
  Gym = "gym",
  FitnessCenter = "fitness_center",
  YogaCenter = "yoga_center",
  DanceCenter = "dance_center",
  NutritionCenter = "nutrition_center",
  PhysiotherapyCenter = "physiotherapy_center",
  PsychologyCenter = "psychology_center",
  CounsellingCenter = "counselling_center",
  LifeCoachingCenter = "life_coaching_center",
  CareerCoachingCenter = "career_coaching_center",
  BusinessCoachingCenter = "business_coaching_center",
  AcademicCoachingCenter = "academic_coaching_center",
  MusicCenter = "music_center",
  ArtCenter = "art_center",
  CraftCenter = "craft_center",
  LanguageCenter = "language_center",
  Other = "other",
}

export interface User {
  id: number;
  company?: Company;
  /** @maxLength 128 */
  password?: string;
  /**
   * Superuser status
   * Designates that this user has all permissions without explicitly assigning them.
   */
  is_superuser: boolean;
  /** @maxLength 40 */
  first_name?: string | null;
  /** @maxLength 40 */
  last_name?: string | null;
  /** @maxLength 13 */
  cellphone_number?: string | null;
  /**
   * @format email
   * @maxLength 254
   */
  email?: string | null;
  /** @format date-time */
  last_login: string | null;
  /** @format date-time */
  date_joined: string | null;
  /** @maxLength 100 */
  company_name?: string | null;
  is_coach: boolean;
  is_admin: boolean;
  is_active: boolean;
  is_staff: boolean;
  is_registration_complete?: boolean;
  /** The groups this user belongs to. A user will get all permissions granted to each of their groups. */
  groups?: number[];
  /** Specific permissions for this user. */
  user_permissions?: number[];
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key]
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key)
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      }
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Gym project
 * @version 1.0.0
 *
 * Gym project
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags auth
     * @name AuthCreate
     * @request POST:/api/auth/
     */
    authCreate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/auth/`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthUpdate
     * @request PUT:/api/auth/{id}
     * @secure
     */
    authUpdate: (id: number, data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/auth/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthPartialUpdate
     * @request PATCH:/api/auth/{id}
     * @secure
     */
    authPartialUpdate: (
      id: number,
      data: PatchedUser,
      params: RequestParams = {}
    ) =>
      this.request<User, any>({
        path: `/api/auth/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthCompanyRetrieve
     * @request GET:/api/auth/company
     * @secure
     */
    authCompanyRetrieve: (params: RequestParams = {}) =>
      this.request<Company, any>({
        path: `/api/auth/company`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthCompleteRegistrationCreate
     * @request POST:/api/auth/complete-registration
     * @secure
     */
    authCompleteRegistrationCreate: (data: User, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/api/auth/complete-registration`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags auth
     * @name AuthProfileRetrieve
     * @request GET:/api/auth/profile
     * @secure
     */
    authProfileRetrieve: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/auth/profile`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * @description Takes a refresh type JSON web token and returns an access type JSON web token if the refresh token is valid.
     *
     * @tags auth
     * @name AuthRefreshCreate
     * @request POST:/api/auth/refresh
     */
    authRefreshCreate: (data: TokenRefresh, params: RequestParams = {}) =>
      this.request<TokenRefresh, any>({
        path: `/api/auth/refresh`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Takes a set of user credentials and returns an access and refresh JSON web token pair to prove the authentication of those credentials.
     *
     * @tags auth
     * @name AuthSignInCreate
     * @request POST:/api/auth/sign-in
     */
    authSignInCreate: (data: MyTokenObtainPair, params: RequestParams = {}) =>
      this.request<MyTokenObtainPair, any>({
        path: `/api/auth/sign-in`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name CompaniesList
     * @request GET:/api/companies/
     * @secure
     */
    companiesList: (
      query?: {
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedCompanyList, any>({
        path: `/api/companies/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name CompaniesCreate
     * @request POST:/api/companies/
     * @secure
     */
    companiesCreate: (data: Company, params: RequestParams = {}) =>
      this.request<Company, any>({
        path: `/api/companies/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name CompaniesRetrieve
     * @request GET:/api/companies/{id}/
     * @secure
     */
    companiesRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Company, any>({
        path: `/api/companies/${id}/`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name CompaniesUpdate
     * @request PUT:/api/companies/{id}/
     * @secure
     */
    companiesUpdate: (id: number, data: Company, params: RequestParams = {}) =>
      this.request<Company, any>({
        path: `/api/companies/${id}/`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name CompaniesPartialUpdate
     * @request PATCH:/api/companies/{id}/
     * @secure
     */
    companiesPartialUpdate: (
      id: number,
      data: PatchedCompany,
      params: RequestParams = {}
    ) =>
      this.request<Company, any>({
        path: `/api/companies/${id}/`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags companies
     * @name CompaniesDestroy
     * @request DELETE:/api/companies/{id}/
     * @secure
     */
    companiesDestroy: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/companies/${id}/`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercises
     * @name ExercisesList
     * @request GET:/api/exercises/
     * @secure
     */
    exercisesList: (
      query?: {
        /** Which field to use when ordering the results. */
        ordering?: string;
        /** A page number within the paginated result set. */
        page?: number;
      },
      params: RequestParams = {}
    ) =>
      this.request<PaginatedExerciseList, any>({
        path: `/api/exercises/`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercises
     * @name ExercisesCreate
     * @request POST:/api/exercises/
     * @secure
     */
    exercisesCreate: (data: Exercise, params: RequestParams = {}) =>
      this.request<Exercise, any>({
        path: `/api/exercises/`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercises
     * @name ExercisesRetrieve
     * @request GET:/api/exercises/{id}
     * @secure
     */
    exercisesRetrieve: (id: number, params: RequestParams = {}) =>
      this.request<Exercise, any>({
        path: `/api/exercises/${id}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercises
     * @name ExercisesUpdate
     * @request PUT:/api/exercises/{id}
     * @secure
     */
    exercisesUpdate: (id: number, data: Exercise, params: RequestParams = {}) =>
      this.request<Exercise, any>({
        path: `/api/exercises/${id}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercises
     * @name ExercisesPartialUpdate
     * @request PATCH:/api/exercises/{id}
     * @secure
     */
    exercisesPartialUpdate: (
      id: number,
      data: PatchedExercise,
      params: RequestParams = {}
    ) =>
      this.request<Exercise, any>({
        path: `/api/exercises/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags exercises
     * @name ExercisesDestroy
     * @request DELETE:/api/exercises/{id}
     * @secure
     */
    exercisesDestroy: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/exercises/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),
  };
}
