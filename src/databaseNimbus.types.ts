export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type DatabaseNimbus = {
  public: {
    Tables: {
      Changelog: {
        Row: {
          changelog: Json | null;
          created_at: string;
          id: number;
          version: string | null;
        };
        Insert: {
          changelog?: Json | null;
          created_at?: string;
          id?: number;
          version?: string | null;
        };
        Update: {
          changelog?: Json | null;
          created_at?: string;
          id?: number;
          version?: string | null;
        };
        Relationships: [];
      };
      CoinNarrativeID: {
        Row: {
          created_at: string;
          id: number;
          symbol: string | null;
          thread_id: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          symbol?: string | null;
          thread_id?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          symbol?: string | null;
          thread_id?: string | null;
        };
        Relationships: [];
      };
      errorlog: {
        Row: {
          id: number;
          message: string | null;
          stack: string | null;
          timestamp: string | null;
          username: string | null;
        };
        Insert: {
          id?: number;
          message?: string | null;
          stack?: string | null;
          timestamp?: string | null;
          username?: string | null;
        };
        Update: {
          id?: number;
          message?: string | null;
          stack?: string | null;
          timestamp?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      ImportantNews: {
        Row: {
          _id: string;
          avatar: string | null;
          blocked: boolean | null;
          created_at: string;
          id: number;
          image: string | null;
          important: string | null;
          isQuote: boolean | null;
          isReply: boolean | null;
          isRetweet: boolean | null;
          messageLinks: string | null;
          messageText: string | null;
          source: string | null;
          symbol: string | null;
          type: string | null;
        };
        Insert: {
          _id: string;
          avatar?: string | null;
          blocked?: boolean | null;
          created_at?: string;
          id?: number;
          image?: string | null;
          important?: string | null;
          isQuote?: boolean | null;
          isReply?: boolean | null;
          isRetweet?: boolean | null;
          messageLinks?: string | null;
          messageText?: string | null;
          source?: string | null;
          symbol?: string | null;
          type?: string | null;
        };
        Update: {
          _id?: string;
          avatar?: string | null;
          blocked?: boolean | null;
          created_at?: string;
          id?: number;
          image?: string | null;
          important?: string | null;
          isQuote?: boolean | null;
          isReply?: boolean | null;
          isRetweet?: boolean | null;
          messageLinks?: string | null;
          messageText?: string | null;
          source?: string | null;
          symbol?: string | null;
          type?: string | null;
        };
        Relationships: [];
      };
      Likes: {
        Row: {
          list_id: string;
          user_id: string;
        };
        Insert: {
          list_id: string;
          user_id: string;
        };
        Update: {
          list_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'Likes_list_id_fkey';
            columns: ['list_id'];
            isOneToOne: false;
            referencedRelation: 'NimbusList';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'Likes_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      ListingDates: {
        Row: {
          created_at: string;
          id: number;
          listing_time: string;
          symbol: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          listing_time: string;
          symbol: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          listing_time?: string;
          symbol?: string;
        };
        Relationships: [];
      };
      NimbusLayout: {
        Row: {
          colorSettings: Json | null;
          created_at: string;
          description: string | null;
          id: number;
          layout: Json | null;
          title: string | null;
          username: string | null;
        };
        Insert: {
          colorSettings?: Json | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          layout?: Json | null;
          title?: string | null;
          username?: string | null;
        };
        Update: {
          colorSettings?: Json | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          layout?: Json | null;
          title?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      NimbusList: {
        Row: {
          created_at: string;
          description: string | null;
          id: string;
          likes: number;
          list: string[];
          name: string;
          share: boolean;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: string;
          likes?: number;
          list: string[];
          name?: string;
          share?: boolean;
          user_id: string;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: string;
          likes?: number;
          list?: string[];
          name?: string;
          share?: boolean;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'NimbusList_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: false;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      PriceData: {
        Row: {
          created_at: string;
          dPrice: number;
          dTime: string;
          first_candle_time: string;
          id: number;
          last_candle_time: string;
          mPrice: number;
          mTime: string;
          symbol: string;
          wPrice: number;
          wTime: string;
          yPrice: number;
          yTime: string;
        };
        Insert: {
          created_at?: string;
          dPrice: number;
          dTime: string;
          first_candle_time: string;
          id?: number;
          last_candle_time: string;
          mPrice: number;
          mTime: string;
          symbol: string;
          wPrice: number;
          wTime: string;
          yPrice: number;
          yTime: string;
        };
        Update: {
          created_at?: string;
          dPrice?: number;
          dTime?: string;
          first_candle_time?: string;
          id?: number;
          last_candle_time?: string;
          mPrice?: number;
          mTime?: string;
          symbol?: string;
          wPrice?: number;
          wTime?: string;
          yPrice?: number;
          yTime?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          account_limit: number;
          avatar_url: string | null;
          ban: boolean | null;
          email: string | null;
          full_name: string | null;
          global_name: string | null;
          id: string;
          telegram_user_id: number | null;
          updated_at: string | null;
          username: string | null;
        };
        Insert: {
          account_limit?: number;
          avatar_url?: string | null;
          ban?: boolean | null;
          email?: string | null;
          full_name?: string | null;
          global_name?: string | null;
          id: string;
          telegram_user_id?: number | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Update: {
          account_limit?: number;
          avatar_url?: string | null;
          ban?: boolean | null;
          email?: string | null;
          full_name?: string | null;
          global_name?: string | null;
          id?: string;
          telegram_user_id?: number | null;
          updated_at?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey';
            columns: ['id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      PublicCoinList: {
        Row: {
          created_at: string;
          description: string | null;
          id: number;
          listofcoins: string[] | null;
          title: string | null;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          description?: string | null;
          id?: number;
          listofcoins?: string[] | null;
          title?: string | null;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          description?: string | null;
          id?: number;
          listofcoins?: string[] | null;
          title?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      PublicFiltersTable: {
        Row: {
          created_at: string;
          data: Json | null;
          description: string | null;
          id: number;
          title: string;
          username: string | null;
        };
        Insert: {
          created_at?: string;
          data?: Json | null;
          description?: string | null;
          id?: number;
          title: string;
          username?: string | null;
        };
        Update: {
          created_at?: string;
          data?: Json | null;
          description?: string | null;
          id?: number;
          title?: string;
          username?: string | null;
        };
        Relationships: [];
      };
      PublicTableConfig: {
        Row: {
          config: Json | null;
          created_at: string;
          description: string | null;
          id: number;
          title: string | null;
          username: string | null;
        };
        Insert: {
          config?: Json | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          title?: string | null;
          username?: string | null;
        };
        Update: {
          config?: Json | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          title?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
      SupplyData: {
        Row: {
          ath: number;
          ath_bfut: number;
          atl_bfut: number;
          binanceSymbol: string;
          circulating_supply: number;
          created_at: string;
          id: string;
          image: string | null;
          max_supply: number;
          name: string;
          NimbusTag: string;
        };
        Insert: {
          ath: number;
          ath_bfut?: number;
          atl_bfut?: number;
          binanceSymbol: string;
          circulating_supply: number;
          created_at?: string;
          id: string;
          image?: string | null;
          max_supply: number;
          name: string;
          NimbusTag?: string;
        };
        Update: {
          ath?: number;
          ath_bfut?: number;
          atl_bfut?: number;
          binanceSymbol?: string;
          circulating_supply?: number;
          created_at?: string;
          id?: string;
          image?: string | null;
          max_supply?: number;
          name?: string;
          NimbusTag?: string;
        };
        Relationships: [];
      };
      tg: {
        Row: {
          created_at: string;
          id: string;
          tg: number | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          tg?: number | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          tg?: number | null;
        };
        Relationships: [];
      };
      UserSettings: {
        Row: {
          buy_split_btn: number[];
          fav_list: string[];
          last_updated: string;
          sell_split_btn: number[];
          size_default: number;
          size_inc: number;
          size_quick_btn: number[];
          sl_btn: number[];
          tp_split_btn: number[];
          user_id: string;
        };
        Insert: {
          buy_split_btn?: number[];
          fav_list: string[];
          last_updated?: string;
          sell_split_btn?: number[];
          size_default?: number;
          size_inc?: number;
          size_quick_btn?: number[];
          sl_btn?: number[];
          tp_split_btn?: number[];
          user_id: string;
        };
        Update: {
          buy_split_btn?: number[];
          fav_list?: string[];
          last_updated?: string;
          sell_split_btn?: number[];
          size_default?: number;
          size_inc?: number;
          size_quick_btn?: number[];
          sl_btn?: number[];
          tp_split_btn?: number[];
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'UserSettings_user_id_fkey';
            columns: ['user_id'];
            isOneToOne: true;
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
      V2_Layout: {
        Row: {
          colorSettings: Json | null;
          created_at: string;
          description: string | null;
          id: number;
          layout: Json | null;
          title: string | null;
          username: string | null;
        };
        Insert: {
          colorSettings?: Json | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          layout?: Json | null;
          title?: string | null;
          username?: string | null;
        };
        Update: {
          colorSettings?: Json | null;
          created_at?: string;
          description?: string | null;
          id?: number;
          layout?: Json | null;
          title?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      update_likes: {
        Args: {
          nimbus_list: string;
          client_user_id: string;
        };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = DatabaseNimbus[Extract<keyof DatabaseNimbus, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof DatabaseNimbus },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof DatabaseNimbus;
  }
    ? keyof (DatabaseNimbus[PublicTableNameOrOptions['schema']]['Tables'] &
        DatabaseNimbus[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof DatabaseNimbus }
  ? (DatabaseNimbus[PublicTableNameOrOptions['schema']]['Tables'] &
      DatabaseNimbus[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
      PublicSchema['Views'])
  ? (PublicSchema['Tables'] &
      PublicSchema['Views'])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof DatabaseNimbus },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof DatabaseNimbus;
  }
    ? keyof DatabaseNimbus[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof DatabaseNimbus }
  ? DatabaseNimbus[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof DatabaseNimbus },
  TableName extends PublicTableNameOrOptions extends {
    schema: keyof DatabaseNimbus;
  }
    ? keyof DatabaseNimbus[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof DatabaseNimbus }
  ? DatabaseNimbus[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
  ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof DatabaseNimbus },
  EnumName extends PublicEnumNameOrOptions extends {
    schema: keyof DatabaseNimbus;
  }
    ? keyof DatabaseNimbus[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof DatabaseNimbus }
  ? DatabaseNimbus[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
  ? PublicSchema['Enums'][PublicEnumNameOrOptions]
  : never;
