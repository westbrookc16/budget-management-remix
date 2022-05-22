/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/budgets": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.budgets.id"];
          month?: parameters["rowFilter.budgets.month"];
          year?: parameters["rowFilter.budgets.year"];
          income?: parameters["rowFilter.budgets.income"];
          user_id?: parameters["rowFilter.budgets.user_id"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["budgets"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** budgets */
          budgets?: definitions["budgets"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.budgets.id"];
          month?: parameters["rowFilter.budgets.month"];
          year?: parameters["rowFilter.budgets.year"];
          income?: parameters["rowFilter.budgets.income"];
          user_id?: parameters["rowFilter.budgets.user_id"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.budgets.id"];
          month?: parameters["rowFilter.budgets.month"];
          year?: parameters["rowFilter.budgets.year"];
          income?: parameters["rowFilter.budgets.income"];
          user_id?: parameters["rowFilter.budgets.user_id"];
        };
        body: {
          /** budgets */
          budgets?: definitions["budgets"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/categories": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.categories.id"];
          budget_id?: parameters["rowFilter.categories.budget_id"];
          name?: parameters["rowFilter.categories.name"];
          amount?: parameters["rowFilter.categories.amount"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["categories"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** categories */
          categories?: definitions["categories"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.categories.id"];
          budget_id?: parameters["rowFilter.categories.budget_id"];
          name?: parameters["rowFilter.categories.name"];
          amount?: parameters["rowFilter.categories.amount"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.categories.id"];
          budget_id?: parameters["rowFilter.categories.budget_id"];
          name?: parameters["rowFilter.categories.name"];
          amount?: parameters["rowFilter.categories.amount"];
        };
        body: {
          /** categories */
          categories?: definitions["categories"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/transactions": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.transactions.id"];
          category_id?: parameters["rowFilter.transactions.category_id"];
          name?: parameters["rowFilter.transactions.name"];
          amount?: parameters["rowFilter.transactions.amount"];
          transaction_date?: parameters["rowFilter.transactions.transaction_date"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["transactions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** transactions */
          transactions?: definitions["transactions"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.transactions.id"];
          category_id?: parameters["rowFilter.transactions.category_id"];
          name?: parameters["rowFilter.transactions.name"];
          amount?: parameters["rowFilter.transactions.amount"];
          transaction_date?: parameters["rowFilter.transactions.transaction_date"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.transactions.id"];
          category_id?: parameters["rowFilter.transactions.category_id"];
          name?: parameters["rowFilter.transactions.name"];
          amount?: parameters["rowFilter.transactions.amount"];
          transaction_date?: parameters["rowFilter.transactions.transaction_date"];
        };
        body: {
          /** transactions */
          transactions?: definitions["transactions"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/user_data": {
    get: {
      parameters: {
        query: {
          email?: parameters["rowFilter.user_data.email"];
          customer_id?: parameters["rowFilter.user_data.customer_id"];
          subscribed?: parameters["rowFilter.user_data.subscribed"];
          user_id?: parameters["rowFilter.user_data.user_id"];
          display_name?: parameters["rowFilter.user_data.display_name"];
          ip_address?: parameters["rowFilter.user_data.ip_address"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["user_data"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** user_data */
          user_data?: definitions["user_data"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          email?: parameters["rowFilter.user_data.email"];
          customer_id?: parameters["rowFilter.user_data.customer_id"];
          subscribed?: parameters["rowFilter.user_data.subscribed"];
          user_id?: parameters["rowFilter.user_data.user_id"];
          display_name?: parameters["rowFilter.user_data.display_name"];
          ip_address?: parameters["rowFilter.user_data.ip_address"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          email?: parameters["rowFilter.user_data.email"];
          customer_id?: parameters["rowFilter.user_data.customer_id"];
          subscribed?: parameters["rowFilter.user_data.subscribed"];
          user_id?: parameters["rowFilter.user_data.user_id"];
          display_name?: parameters["rowFilter.user_data.display_name"];
          ip_address?: parameters["rowFilter.user_data.ip_address"];
        };
        body: {
          /** user_data */
          user_data?: definitions["user_data"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/vw_transactions": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.vw_transactions.id"];
          name?: parameters["rowFilter.vw_transactions.name"];
          amount?: parameters["rowFilter.vw_transactions.amount"];
          transaction_date?: parameters["rowFilter.vw_transactions.transaction_date"];
          category_id?: parameters["rowFilter.vw_transactions.category_id"];
          category_name?: parameters["rowFilter.vw_transactions.category_name"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["vw_transactions"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
  };
}

export interface definitions {
  budgets: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: integer */
    month?: number;
    /** Format: integer */
    year?: number;
    /** Format: money */
    income?: string;
    /** Format: uuid */
    user_id?: string;
  };
  categories: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `budgets.id`.<fk table='budgets' column='id'/>
     */
    budget_id?: number;
    /** Format: character varying */
    name?: string;
    /** Format: money */
    amount?: string;
  };
  transactions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /** Format: bigint */
    category_id?: number;
    /** Format: character varying */
    name?: string;
    /** Format: money */
    amount?: string;
    /** Format: date */
    transaction_date?: string;
  };
  user_data: {
    /** Format: character varying */
    email?: string;
    /** Format: character varying */
    customer_id?: string;
    /** Format: boolean */
    subscribed?: boolean;
    /** Format: uuid */
    user_id: string;
    /** Format: character varying */
    display_name?: string;
    /** Format: character varying */
    ip_address?: string;
  };
  vw_transactions: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id?: number;
    /** Format: character varying */
    name?: string;
    /** Format: money */
    amount?: string;
    /** Format: text */
    transaction_date?: string;
    /** Format: bigint */
    category_id?: number;
    /** Format: character varying */
    category_name?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description budgets */
  "body.budgets": definitions["budgets"];
  /** Format: bigint */
  "rowFilter.budgets.id": string;
  /** Format: integer */
  "rowFilter.budgets.month": string;
  /** Format: integer */
  "rowFilter.budgets.year": string;
  /** Format: money */
  "rowFilter.budgets.income": string;
  /** Format: uuid */
  "rowFilter.budgets.user_id": string;
  /** @description categories */
  "body.categories": definitions["categories"];
  /** Format: bigint */
  "rowFilter.categories.id": string;
  /** Format: bigint */
  "rowFilter.categories.budget_id": string;
  /** Format: character varying */
  "rowFilter.categories.name": string;
  /** Format: money */
  "rowFilter.categories.amount": string;
  /** @description transactions */
  "body.transactions": definitions["transactions"];
  /** Format: bigint */
  "rowFilter.transactions.id": string;
  /** Format: bigint */
  "rowFilter.transactions.category_id": string;
  /** Format: character varying */
  "rowFilter.transactions.name": string;
  /** Format: money */
  "rowFilter.transactions.amount": string;
  /** Format: date */
  "rowFilter.transactions.transaction_date": string;
  /** @description user_data */
  "body.user_data": definitions["user_data"];
  /** Format: character varying */
  "rowFilter.user_data.email": string;
  /** Format: character varying */
  "rowFilter.user_data.customer_id": string;
  /** Format: boolean */
  "rowFilter.user_data.subscribed": string;
  /** Format: uuid */
  "rowFilter.user_data.user_id": string;
  /** Format: character varying */
  "rowFilter.user_data.display_name": string;
  /** Format: character varying */
  "rowFilter.user_data.ip_address": string;
  /** @description vw_transactions */
  "body.vw_transactions": definitions["vw_transactions"];
  /** Format: bigint */
  "rowFilter.vw_transactions.id": string;
  /** Format: character varying */
  "rowFilter.vw_transactions.name": string;
  /** Format: money */
  "rowFilter.vw_transactions.amount": string;
  /** Format: text */
  "rowFilter.vw_transactions.transaction_date": string;
  /** Format: bigint */
  "rowFilter.vw_transactions.category_id": string;
  /** Format: character varying */
  "rowFilter.vw_transactions.category_name": string;
}

export interface operations {}

export interface external {}
