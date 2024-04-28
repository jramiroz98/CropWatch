export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      alerts: {
        Row: {
          action: string
          created_at: string | null
          dev_eui: string
          id: number
          name: string
          profile_id: string
          source: string
          value: number
        }
        Insert: {
          action: string
          created_at?: string | null
          dev_eui: string
          id?: number
          name: string
          profile_id: string
          source: string
          value: number
        }
        Update: {
          action?: string
          created_at?: string | null
          dev_eui?: string
          id?: number
          name?: string
          profile_id?: string
          source?: string
          value?: number
        }
        Relationships: []
      }
      babylon_connection_types: {
        Row: {
          created_at: string
          id: number
          name: string
          type_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          type_id?: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          type_id?: number
        }
        Relationships: []
      }
      babylon_decoders: {
        Row: {
          created_at: string
          decoder: string | null
          decoder_id: number
          id: number
          name: string
        }
        Insert: {
          created_at?: string
          decoder?: string | null
          decoder_id?: number
          id?: number
          name?: string
        }
        Update: {
          created_at?: string
          decoder?: string | null
          decoder_id?: number
          id?: number
          name?: string
        }
        Relationships: []
      }
      babylon_in_connections: {
        Row: {
          connection_id: number
          connection_name: string
          created_at: string
          endpoint: string
          id: number
          password: string | null
          port: number | null
          profile_id: string
          type: number
          username: string | null
        }
        Insert: {
          connection_id?: number
          connection_name: string
          created_at?: string
          endpoint: string
          id?: number
          password?: string | null
          port?: number | null
          profile_id: string
          type: number
          username?: string | null
        }
        Update: {
          connection_id?: number
          connection_name?: string
          created_at?: string
          endpoint?: string
          id?: number
          password?: string | null
          port?: number | null
          profile_id?: string
          type?: number
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_babylon_connections_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_babylon_in_connections_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "babylon_connection_types"
            referencedColumns: ["type_id"]
          },
        ]
      }
      babylon_input_output: {
        Row: {
          created_at: string
          id: number
          in_id: number
          out_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          in_id: number
          out_id: number
        }
        Update: {
          created_at?: string
          id?: number
          in_id?: number
          out_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_babylon_input_output_in_id_fkey"
            columns: ["in_id"]
            isOneToOne: false
            referencedRelation: "babylon_in_connections"
            referencedColumns: ["connection_id"]
          },
          {
            foreignKeyName: "public_babylon_input_output_out_id_fkey"
            columns: ["out_id"]
            isOneToOne: false
            referencedRelation: "babylon_out_connections"
            referencedColumns: ["connection_id"]
          },
        ]
      }
      babylon_notifier_types: {
        Row: {
          created_at: string
          id: number
          name: string
          notifier_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          name: string
          notifier_id?: number
        }
        Update: {
          created_at?: string
          id?: number
          name?: string
          notifier_id?: number
        }
        Relationships: []
      }
      babylon_notifiers: {
        Row: {
          api_key: string | null
          created_at: string
          host: string | null
          id: number
          isSecure: boolean
          name: string
          notifier_id: number | null
          password: string | null
          port: number | null
          type: number | null
          username: string | null
        }
        Insert: {
          api_key?: string | null
          created_at?: string
          host?: string | null
          id?: number
          isSecure?: boolean
          name: string
          notifier_id?: number | null
          password?: string | null
          port?: number | null
          type?: number | null
          username?: string | null
        }
        Update: {
          api_key?: string | null
          created_at?: string
          host?: string | null
          id?: number
          isSecure?: boolean
          name?: string
          notifier_id?: number | null
          password?: string | null
          port?: number | null
          type?: number | null
          username?: string | null
        }
        Relationships: []
      }
      babylon_notifiers_out_connections: {
        Row: {
          created_at: string
          id: number
          notifier_id: number
          out_connection_id: number
        }
        Insert: {
          created_at?: string
          id?: number
          notifier_id: number
          out_connection_id: number
        }
        Update: {
          created_at?: string
          id?: number
          notifier_id?: number
          out_connection_id?: number
        }
        Relationships: []
      }
      babylon_out_connections: {
        Row: {
          connection_id: number
          connection_name: string
          created_at: string
          decoder: number | null
          endpoint: string | null
          id: number
          password: string | null
          port: number | null
          profile_id: string
          type: number
          username: string | null
        }
        Insert: {
          connection_id?: number
          connection_name: string
          created_at?: string
          decoder?: number | null
          endpoint?: string | null
          id?: number
          password?: string | null
          port?: number | null
          profile_id: string
          type: number
          username?: string | null
        }
        Update: {
          connection_id?: number
          connection_name?: string
          created_at?: string
          decoder?: number | null
          endpoint?: string | null
          id?: number
          password?: string | null
          port?: number | null
          profile_id?: string
          type?: number
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_babylon_out_connections_decoder_fkey"
            columns: ["decoder"]
            isOneToOne: false
            referencedRelation: "babylon_decoders"
            referencedColumns: ["decoder_id"]
          },
          {
            foreignKeyName: "public_babylon_out_connections_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_babylon_out_connections_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "babylon_connection_types"
            referencedColumns: ["type_id"]
          },
        ]
      }
      cropwatch_uplinks: {
        Row: {
          confirmed: boolean | null
          created_at: string | null
          decoded_payload: Json | null
          dev_eui: string | null
          f_cnt: number
          f_port: number | null
          frm_payload: string | null
          id: number
          metadata: Json | null
          received_at: string | null
          ui_metadata: Json | null
        }
        Insert: {
          confirmed?: boolean | null
          created_at?: string | null
          decoded_payload?: Json | null
          dev_eui?: string | null
          f_cnt?: number
          f_port?: number | null
          frm_payload?: string | null
          id?: number
          metadata?: Json | null
          received_at?: string | null
          ui_metadata?: Json | null
        }
        Update: {
          confirmed?: boolean | null
          created_at?: string | null
          decoded_payload?: Json | null
          dev_eui?: string | null
          f_cnt?: number
          f_port?: number | null
          frm_payload?: string | null
          id?: number
          metadata?: Json | null
          received_at?: string | null
          ui_metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "cropwatch_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_air_thvd: {
        Row: {
          created_at: string
          dev_eui: string
          dewPointC: number | null
          humidity: number
          id: number
          profile_id: string | null
          temperatureC: number
          vpd: number | null
        }
        Insert: {
          created_at?: string
          dev_eui: string
          dewPointC?: number | null
          humidity: number
          id?: number
          profile_id?: string | null
          temperatureC: number
          vpd?: number | null
        }
        Update: {
          created_at?: string
          dev_eui?: string
          dewPointC?: number | null
          humidity?: number
          id?: number
          profile_id?: string | null
          temperatureC?: number
          vpd?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cw_air_thvd_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "public_cw_air_thvd_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cw_co2_alerts: {
        Row: {
          action: string
          cleared: boolean
          created_at: string
          dev_eui: string
          id: number
          OneSignalID: string | null
          operator: string
          profile_id: string
          receiver: string
          subject: string
          value: number
        }
        Insert: {
          action: string
          cleared: boolean
          created_at?: string
          dev_eui: string
          id?: number
          OneSignalID?: string | null
          operator: string
          profile_id: string
          receiver: string
          subject: string
          value: number
        }
        Update: {
          action?: string
          cleared?: boolean
          created_at?: string
          dev_eui?: string
          id?: number
          OneSignalID?: string | null
          operator?: string
          profile_id?: string
          receiver?: string
          subject?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "cw_co2_alerts_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "cw_co2_alerts_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cw_co2_uplinks: {
        Row: {
          battery: number | null
          co2_level: number | null
          created_at: string
          dev_eui: string | null
          humidity: number
          id: number
          pressure: number | null
          temperature: number
        }
        Insert: {
          battery?: number | null
          co2_level?: number | null
          created_at?: string
          dev_eui?: string | null
          humidity: number
          id?: number
          pressure?: number | null
          temperature: number
        }
        Update: {
          battery?: number | null
          co2_level?: number | null
          created_at?: string
          dev_eui?: string | null
          humidity?: number
          id?: number
          pressure?: number | null
          temperature?: number
        }
        Relationships: [
          {
            foreignKeyName: "cw_co2_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_device_locations: {
        Row: {
          dev_eui: string
          id: number
          location_id: number
        }
        Insert: {
          dev_eui: string
          id?: number
          location_id: number
        }
        Update: {
          dev_eui?: string
          id?: number
          location_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "cw_device_locations_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: true
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "cw_device_locations_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "cw_locations"
            referencedColumns: ["location_id"]
          },
        ]
      }
      cw_device_owners: {
        Row: {
          dev_eui: string
          id: number
          owner_id: number
          permission_level: number
          user_id: string
        }
        Insert: {
          dev_eui: string
          id?: number
          owner_id?: number
          permission_level?: number
          user_id: string
        }
        Update: {
          dev_eui?: string
          id?: number
          owner_id?: number
          permission_level?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cw_device_owners_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "cw_device_owners_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cw_device_type: {
        Row: {
          created_at: string
          data_table: string | null
          decoder: string | null
          device_app: string | null
          id: number
          manufacturer: string | null
          model: string | null
          name: string
          primary_data: string | null
          primary_data_notation: string | null
        }
        Insert: {
          created_at?: string
          data_table?: string | null
          decoder?: string | null
          device_app?: string | null
          id?: number
          manufacturer?: string | null
          model?: string | null
          name: string
          primary_data?: string | null
          primary_data_notation?: string | null
        }
        Update: {
          created_at?: string
          data_table?: string | null
          decoder?: string | null
          device_app?: string | null
          id?: number
          manufacturer?: string | null
          model?: string | null
          name?: string
          primary_data?: string | null
          primary_data_notation?: string | null
        }
        Relationships: []
      }
      cw_devices: {
        Row: {
          battery_changed_at: string | null
          dev_eui: string
          installed_at: string | null
          lat: number | null
          long: number | null
          name: string
          type: number | null
          upload_interval: number | null
        }
        Insert: {
          battery_changed_at?: string | null
          dev_eui: string
          installed_at?: string | null
          lat?: number | null
          long?: number | null
          name?: string
          type?: number | null
          upload_interval?: number | null
        }
        Update: {
          battery_changed_at?: string | null
          dev_eui?: string
          installed_at?: string | null
          lat?: number | null
          long?: number | null
          name?: string
          type?: number | null
          upload_interval?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cw_devices_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "cw_device_type"
            referencedColumns: ["id"]
          },
        ]
      }
      cw_gps_uplinks: {
        Row: {
          altitude: number | null
          battery: number | null
          collected_time: string | null
          created_at: string
          dev_eui: string
          geoPos: unknown | null
          hdop: number | null
          id: number
          isHistoric: boolean
          latitude: number
          longitude: number
        }
        Insert: {
          altitude?: number | null
          battery?: number | null
          collected_time?: string | null
          created_at?: string
          dev_eui: string
          geoPos?: unknown | null
          hdop?: number | null
          id?: number
          isHistoric?: boolean
          latitude: number
          longitude: number
        }
        Update: {
          altitude?: number | null
          battery?: number | null
          collected_time?: string | null
          created_at?: string
          dev_eui?: string
          geoPos?: unknown | null
          hdop?: number | null
          id?: number
          isHistoric?: boolean
          latitude?: number
          longitude?: number
        }
        Relationships: []
      }
      cw_location_owners: {
        Row: {
          description: string | null
          id: number
          is_active: boolean | null
          location_id: number
          owner_id: number
          permission_level: number | null
          user_id: string
        }
        Insert: {
          description?: string | null
          id?: number
          is_active?: boolean | null
          location_id: number
          owner_id?: number
          permission_level?: number | null
          user_id: string
        }
        Update: {
          description?: string | null
          id?: number
          is_active?: boolean | null
          location_id?: number
          owner_id?: number
          permission_level?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cw_location_owners_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "cw_locations"
            referencedColumns: ["location_id"]
          },
          {
            foreignKeyName: "cw_location_owners_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cw_locations: {
        Row: {
          created_at: string
          description: string | null
          latitude: number | null
          location_id: number
          longitude: number | null
          name: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          latitude?: number | null
          location_id?: number
          longitude?: number | null
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          latitude?: number | null
          location_id?: number
          longitude?: number | null
          name?: string
        }
        Relationships: []
      }
      cw_pulse_meters: {
        Row: {
          count: number
          created_at: string
          dev_eui: string
          id: number
          litersPerPulse: number
          periodCount: number
        }
        Insert: {
          count?: number
          created_at?: string
          dev_eui: string
          id?: number
          litersPerPulse?: number
          periodCount?: number
        }
        Update: {
          count?: number
          created_at?: string
          dev_eui?: string
          id?: number
          litersPerPulse?: number
          periodCount?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_cw_pulse_meters_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_rule_criteria: {
        Row: {
          created_at: string
          criteria_id: number | null
          id: number
          operator: string
          parent_id: string | null
          reset_value: number | null
          ruleGroupId: string
          subject: string
          trigger_value: number
        }
        Insert: {
          created_at?: string
          criteria_id?: number | null
          id?: number
          operator: string
          parent_id?: string | null
          reset_value?: number | null
          ruleGroupId: string
          subject: string
          trigger_value: number
        }
        Update: {
          created_at?: string
          criteria_id?: number | null
          id?: number
          operator?: string
          parent_id?: string | null
          reset_value?: number | null
          ruleGroupId?: string
          subject?: string
          trigger_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_cw_rule_criteria_ruleGroupId_fkey"
            columns: ["ruleGroupId"]
            isOneToOne: false
            referencedRelation: "cw_rules"
            referencedColumns: ["ruleGroupId"]
          },
        ]
      }
      cw_rules: {
        Row: {
          action_recipient: string
          babylon_notifier_type: number
          created_at: string
          dev_eui: string | null
          id: number
          is_triggered: boolean
          last_triggered: string | null
          name: string
          profile_id: string
          ruleGroupId: string
          trigger_count: number
        }
        Insert: {
          action_recipient: string
          babylon_notifier_type: number
          created_at?: string
          dev_eui?: string | null
          id?: number
          is_triggered?: boolean
          last_triggered?: string | null
          name: string
          profile_id?: string
          ruleGroupId: string
          trigger_count?: number
        }
        Update: {
          action_recipient?: string
          babylon_notifier_type?: number
          created_at?: string
          dev_eui?: string | null
          id?: number
          is_triggered?: boolean
          last_triggered?: string | null
          name?: string
          profile_id?: string
          ruleGroupId?: string
          trigger_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_cw_rules_babylon_notifier_type_fkey"
            columns: ["babylon_notifier_type"]
            isOneToOne: false
            referencedRelation: "babylon_notifier_types"
            referencedColumns: ["notifier_id"]
          },
          {
            foreignKeyName: "public_cw_rules_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "public_cw_rules_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cw_seeed_s2120: {
        Row: {
          battery_level: number | null
          created_at: string
          dev_eui: string
          frame_id: number
          humidity: number | null
          id: number
          isSimulated: boolean
          lux: number | null
          pressure: number | null
          profile_id: string | null
          rain: number | null
          temperatureC: number | null
          uv: number | null
          wind_dir: number | null
          wind_speed: number | null
        }
        Insert: {
          battery_level?: number | null
          created_at?: string
          dev_eui: string
          frame_id?: number
          humidity?: number | null
          id?: number
          isSimulated?: boolean
          lux?: number | null
          pressure?: number | null
          profile_id?: string | null
          rain?: number | null
          temperatureC?: number | null
          uv?: number | null
          wind_dir?: number | null
          wind_speed?: number | null
        }
        Update: {
          battery_level?: number | null
          created_at?: string
          dev_eui?: string
          frame_id?: number
          humidity?: number | null
          id?: number
          isSimulated?: boolean
          lux?: number | null
          pressure?: number | null
          profile_id?: string | null
          rain?: number | null
          temperatureC?: number | null
          uv?: number | null
          wind_dir?: number | null
          wind_speed?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_cw_seeed_s2120_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_soil_uplinks: {
        Row: {
          battery: number | null
          created_at: string
          dev_eui: string | null
          ec: number | null
          id: number
          internal_temp: number | null
          k: number | null
          moisture: number
          n: number | null
          p: number | null
          ph: number | null
          read_attempts: number | null
          real_duration: number | null
          temperature: number
        }
        Insert: {
          battery?: number | null
          created_at?: string
          dev_eui?: string | null
          ec?: number | null
          id?: number
          internal_temp?: number | null
          k?: number | null
          moisture: number
          n?: number | null
          p?: number | null
          ph?: number | null
          read_attempts?: number | null
          real_duration?: number | null
          temperature: number
        }
        Update: {
          battery?: number | null
          created_at?: string
          dev_eui?: string | null
          ec?: number | null
          id?: number
          internal_temp?: number | null
          k?: number | null
          moisture?: number
          n?: number | null
          p?: number | null
          ph?: number | null
          read_attempts?: number | null
          real_duration?: number | null
          temperature?: number
        }
        Relationships: [
          {
            foreignKeyName: "cw_soil_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_ss_tme: {
        Row: {
          batteryVoltage: number | null
          created_at: string
          dev_eui: string
          id: number
          internalTemp: number | null
          modbusAttempts: number | null
          soil_EC: number | null
          soil_moisture: number
          soil_temperatureC: number
        }
        Insert: {
          batteryVoltage?: number | null
          created_at?: string
          dev_eui: string
          id?: number
          internalTemp?: number | null
          modbusAttempts?: number | null
          soil_EC?: number | null
          soil_moisture: number
          soil_temperatureC: number
        }
        Update: {
          batteryVoltage?: number | null
          created_at?: string
          dev_eui?: string
          id?: number
          internalTemp?: number | null
          modbusAttempts?: number | null
          soil_EC?: number | null
          soil_moisture?: number
          soil_temperatureC?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_cw_ss_tme_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_ss_tmepnpk: {
        Row: {
          batteryVoltage: number | null
          created_at: string
          dev_eui: string
          id: number
          internalTemp: number | null
          modbusAttempts: number | null
          soil_EC: number | null
          soil_K: number | null
          soil_moisture: number
          soil_N: number | null
          soil_P: number | null
          soil_PH: number | null
          soil_temperatureC: number
        }
        Insert: {
          batteryVoltage?: number | null
          created_at?: string
          dev_eui: string
          id?: number
          internalTemp?: number | null
          modbusAttempts?: number | null
          soil_EC?: number | null
          soil_K?: number | null
          soil_moisture: number
          soil_N?: number | null
          soil_P?: number | null
          soil_PH?: number | null
          soil_temperatureC: number
        }
        Update: {
          batteryVoltage?: number | null
          created_at?: string
          dev_eui?: string
          id?: number
          internalTemp?: number | null
          modbusAttempts?: number | null
          soil_EC?: number | null
          soil_K?: number | null
          soil_moisture?: number
          soil_N?: number | null
          soil_P?: number | null
          soil_PH?: number | null
          soil_temperatureC?: number
        }
        Relationships: [
          {
            foreignKeyName: "cw_ss_tmepnpk_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      cw_watermeter_uplinks: {
        Row: {
          battery_level: number | null
          count: number
          created_at: string
          dev_eui: string
          id: number
          internal_temp: number | null
        }
        Insert: {
          battery_level?: number | null
          count: number
          created_at?: string
          dev_eui: string
          id?: number
          internal_temp?: number | null
        }
        Update: {
          battery_level?: number | null
          count?: number
          created_at?: string
          dev_eui?: string
          id?: number
          internal_temp?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cw_watermeter_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      device_data_metadata: {
        Row: {
          alias: string | null
          created_at: string | null
          data_key: string
          data_type: string
          dev_eui: string
          display_as: string
          divisor: number | null
          id: number
        }
        Insert: {
          alias?: string | null
          created_at?: string | null
          data_key: string
          data_type: string
          dev_eui: string
          display_as: string
          divisor?: number | null
          id?: number
        }
        Update: {
          alias?: string | null
          created_at?: string | null
          data_key?: string
          data_type?: string
          dev_eui?: string
          display_as?: string
          divisor?: number | null
          id?: number
        }
        Relationships: []
      }
      device_x_user: {
        Row: {
          created_at: string
          dev_eui: string
          email: string
          id: number
          profile_id: string | null
          shared_name: string | null
        }
        Insert: {
          created_at?: string
          dev_eui: string
          email: string
          id?: number
          profile_id?: string | null
          shared_name?: string | null
        }
        Update: {
          created_at?: string
          dev_eui?: string
          email?: string
          id?: number
          profile_id?: string | null
          shared_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "device_x_user_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "device_x_user_email_fkey"
            columns: ["email"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "device_x_user_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      devices: {
        Row: {
          active: boolean
          created_at: string | null
          dev_eui: string
          device_name: string | null
          id: number
          lat: number | null
          linked_device_eui: string | null
          lng: number | null
          profile_id: string | null
          type: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string | null
          dev_eui: string
          device_name?: string | null
          id?: number
          lat?: number | null
          linked_device_eui?: string | null
          lng?: number | null
          profile_id?: string | null
          type?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string | null
          dev_eui?: string
          device_name?: string | null
          id?: number
          lat?: number | null
          linked_device_eui?: string | null
          lng?: number | null
          profile_id?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "devices_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      location_permissions: {
        Row: {
          created_at: string | null
          expires_on: string | null
          granted_to: string | null
          id: number
          location_id: number
          role_name: number
        }
        Insert: {
          created_at?: string | null
          expires_on?: string | null
          granted_to?: string | null
          id?: number
          location_id: number
          role_name: number
        }
        Update: {
          created_at?: string | null
          expires_on?: string | null
          granted_to?: string | null
          id?: number
          location_id?: number
          role_name?: number
        }
        Relationships: [
          {
            foreignKeyName: "location_permissions_granted_to_fkey"
            columns: ["granted_to"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_permissions_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "location_permissions_role_name_fkey"
            columns: ["role_name"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      locations: {
        Row: {
          created_at: string | null
          description: string | null
          dev_eui: string | null
          id: number
          lat: number | null
          lng: number | null
          name: string
          profile_id: string | null
          sensor_type: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          dev_eui?: string | null
          id?: number
          lat?: number | null
          lng?: number | null
          name: string
          profile_id?: string | null
          sensor_type?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          dev_eui?: string | null
          id?: number
          lat?: number | null
          lng?: number | null
          name?: string
          profile_id?: string | null
          sensor_type?: string | null
        }
        Relationships: []
      }
      locations_x_devices: {
        Row: {
          created_at: string | null
          device_id: number
          id: number
          location_id: number
        }
        Insert: {
          created_at?: string | null
          device_id: number
          id?: number
          location_id: number
        }
        Update: {
          created_at?: string | null
          device_id?: number
          id?: number
          location_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "locations_x_devices_device_id_fkey"
            columns: ["device_id"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "locations_x_devices_location_id_fkey"
            columns: ["location_id"]
            isOneToOne: false
            referencedRelation: "locations"
            referencedColumns: ["id"]
          },
        ]
      }
      lorawan_uplinks: {
        Row: {
          confirmed: boolean | null
          created_at: string | null
          decoded_payload: Json | null
          dev_eui: string
          f_cnt: number
          f_port: number | null
          frm_payload: string | null
          id: number
          metadata: Json | null
          received_at: string | null
          ui_metadata: Json | null
        }
        Insert: {
          confirmed?: boolean | null
          created_at?: string | null
          decoded_payload?: Json | null
          dev_eui: string
          f_cnt?: number
          f_port?: number | null
          frm_payload?: string | null
          id?: number
          metadata?: Json | null
          received_at?: string | null
          ui_metadata?: Json | null
        }
        Update: {
          confirmed?: boolean | null
          created_at?: string | null
          decoded_payload?: Json | null
          dev_eui?: string
          f_cnt?: number
          f_port?: number | null
          frm_payload?: string | null
          id?: number
          metadata?: Json | null
          received_at?: string | null
          ui_metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "lorawan_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      lorawatch_uplinks: {
        Row: {
          confirmed: boolean | null
          created_at: string | null
          decoded_payload: Json | null
          dev_eui: string
          f_cnt: number
          f_port: number | null
          frm_payload: string | null
          id: number
          metadata: Json | null
          received_at: string | null
          ui_metadata: Json | null
        }
        Insert: {
          confirmed?: boolean | null
          created_at?: string | null
          decoded_payload?: Json | null
          dev_eui: string
          f_cnt?: number
          f_port?: number | null
          frm_payload?: string | null
          id?: number
          metadata?: Json | null
          received_at?: string | null
          ui_metadata?: Json | null
        }
        Update: {
          confirmed?: boolean | null
          created_at?: string | null
          decoded_payload?: Json | null
          dev_eui?: string
          f_cnt?: number
          f_port?: number | null
          frm_payload?: string | null
          id?: number
          metadata?: Json | null
          received_at?: string | null
          ui_metadata?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "lorawatch_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      permissions: {
        Row: {
          allowed_by_profile_id: string | null
          allowed_profile_id: string | null
          created_at: string | null
          description: string | null
          id: number
          resource: string
          role_id: number
        }
        Insert: {
          allowed_by_profile_id?: string | null
          allowed_profile_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          resource: string
          role_id: number
        }
        Update: {
          allowed_by_profile_id?: string | null
          allowed_profile_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: number
          resource?: string
          role_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "permissions_allowed_by_profile_id_fkey"
            columns: ["allowed_by_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permissions_allowed_profile_id_fkey"
            columns: ["allowed_profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          email: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      road_event_lines: {
        Row: {
          camera_id: string
          camera_name: string
          created_at: string | null
          id: number
          line_name: string
        }
        Insert: {
          camera_id?: string
          camera_name: string
          created_at?: string | null
          id?: number
          line_name: string
        }
        Update: {
          camera_id?: string
          camera_name?: string
          created_at?: string | null
          id?: number
          line_name?: string
        }
        Relationships: []
      }
      road_events: {
        Row: {
          camera_id: string | null
          class: string
          created_at: string | null
          direction: number
          id: number
          line_id: string | null
          server_event_datetime: string | null
          source_datetime: string | null
          track_id: number
        }
        Insert: {
          camera_id?: string | null
          class: string
          created_at?: string | null
          direction: number
          id?: number
          line_id?: string | null
          server_event_datetime?: string | null
          source_datetime?: string | null
          track_id: number
        }
        Update: {
          camera_id?: string | null
          class?: string
          created_at?: string | null
          direction?: number
          id?: number
          line_id?: string | null
          server_event_datetime?: string | null
          source_datetime?: string | null
          track_id?: number
        }
        Relationships: []
      }
      role_permissions: {
        Row: {
          id: number
          permission_id: number | null
          role_id: number | null
        }
        Insert: {
          id?: number
          permission_id?: number | null
          role_id?: number | null
        }
        Update: {
          id?: number
          permission_id?: number | null
          role_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "role_permissions_permission_id_fkey"
            columns: ["permission_id"]
            isOneToOne: false
            referencedRelation: "permissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_permissions_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          code: number | null
          created_at: string | null
          description: string | null
          id: number
          name: string
        }
        Insert: {
          code?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          code?: number | null
          created_at?: string | null
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      seeed_co2_lorawan_uplinks: {
        Row: {
          battery: number | null
          co2_level: number | null
          created_at: string | null
          dev_eui: string
          err: number | null
          humidity: number | null
          id: number
          interval: number | null
          payload: string | null
          pressure: number | null
          rssi: number | null
          snr: number | null
          temperature: number | null
          valid: boolean | null
        }
        Insert: {
          battery?: number | null
          co2_level?: number | null
          created_at?: string | null
          dev_eui: string
          err?: number | null
          humidity?: number | null
          id?: number
          interval?: number | null
          payload?: string | null
          pressure?: number | null
          rssi?: number | null
          snr?: number | null
          temperature?: number | null
          valid?: boolean | null
        }
        Update: {
          battery?: number | null
          co2_level?: number | null
          created_at?: string | null
          dev_eui?: string
          err?: number | null
          humidity?: number | null
          id?: number
          interval?: number | null
          payload?: string | null
          pressure?: number | null
          rssi?: number | null
          snr?: number | null
          temperature?: number | null
          valid?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "public_seeed_co2_lorawan_uplinks_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "cw_devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      sensors: {
        Row: {
          address: number | null
          connected_device: string | null
          created_at: string
          id: number
          lat: number | null
          lng: number | null
          type: string | null
        }
        Insert: {
          address?: number | null
          connected_device?: string | null
          created_at?: string
          id?: number
          lat?: number | null
          lng?: number | null
          type?: string | null
        }
        Update: {
          address?: number | null
          connected_device?: string | null
          created_at?: string
          id?: number
          lat?: number | null
          lng?: number | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sensors_connected_device_fkey"
            columns: ["connected_device"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["dev_eui"]
          },
        ]
      }
      temp_humid_co2_alert_settings: {
        Row: {
          action: number
          cleared: boolean
          created_at: string
          dev_eui: string
          id: number
          OneSignalID: string | null
          operator: string
          profile_id: string
          receiver: string
          subject: string
          value: number
        }
        Insert: {
          action: number
          cleared: boolean
          created_at?: string
          dev_eui: string
          id?: number
          OneSignalID?: string | null
          operator: string
          profile_id: string
          receiver: string
          subject: string
          value: number
        }
        Update: {
          action?: number
          cleared?: boolean
          created_at?: string
          dev_eui?: string
          id?: number
          OneSignalID?: string | null
          operator?: string
          profile_id?: string
          receiver?: string
          subject?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "temp_humid_co2_alert_settings_dev_eui_fkey"
            columns: ["dev_eui"]
            isOneToOne: false
            referencedRelation: "devices"
            referencedColumns: ["dev_eui"]
          },
          {
            foreignKeyName: "temp_humid_co2_alert_settings_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
      dev_by_loc: {
        Args: {
          locationid: number
        }
        Returns: {
          dev_eui: string
          decoded_payload: Json
          lat: number
          lng: number
          type: string
          created_at: string
          ui_metadata: Json
          null_ui_metadata_count: number
        }[]
      }
      dev_by_loc2: {
        Args: {
          locationid: number
        }
        Returns: {
          dev_eui: string
          decoded_payload: Json
          lat: number
          lng: number
          type: string
          created_at: string
          ui_metadata: Json
        }[]
      }
      dev_by_loc3: {
        Args: {
          locationid: number
        }
        Returns: {
          dev_eui: string
          decoded_payload: Json
          lat: number
          lng: number
          type: string
          created_at: string
        }[]
      }
      dev_by_loc4: {
        Args: {
          locationid: number
        }
        Returns: {
          dev_eui: string
          decoded_payload: Json
          lat: number
          lng: number
          type: string
          created_at: string
        }[]
      }
      fence_dev_by_loc: {
        Args: {
          locationid: number
        }
        Returns: {
          dev_eui: string
          decoded_payload: Json
          lat: number
          lng: number
          created_at: string
          ui_metadata: Json
          null_ui_metadata_count: number
        }[]
      }
      get_all_devices: {
        Args: {
          username: string
        }
        Returns: string[]
      }
      get_all_fencewatch_uplinks: {
        Args: Record<PropertyKey, never>
        Returns: {
          decoded_payload: Json
          received_at: string
          lat: number
          lng: number
        }[]
      }
      get_all_uplinks: {
        Args: {
          username: string
        }
        Returns: {
          lorawan_uplinks: Json
          received_at: string
        }[]
      }
      get_road_events: {
        Args: {
          time_grouping: string
        }
        Returns: {
          group_period: string
          event_count: number
        }[]
      }
      get_road_events_summary:
        | {
            Args: {
              classes: string[]
              end_date: string
              line_id: string
              start_date: string
              time_span: string
            }
            Returns: {
              class: string
              period_start: string
              count: number
            }[]
          }
        | {
            Args: {
              time_span: string
            }
            Returns: {
              created_at_utc: string
              created_at_tokyo: string
              total_count: number
            }[]
          }
      get_road_events_summary1: {
        Args: {
          classes: string[]
          end_date: string
          line_id: string
          start_date: string
          time_span: string
        }
        Returns: {
          period_start: string
          count: number
        }[]
      }
      get_road_events_summary2: {
        Args: {
          time_span: string
        }
        Returns: {
          id: number
          created_at: string
        }[]
      }
      get_road_events_summary3: {
        Args: {
          time_span: string
        }
        Returns: {
          id: number
          created_at: string
        }[]
      }
      get_unique_counts_per_time: {
        Args: {
          time_range: string
          camera_id: string
          start_time: string
          end_time: string
          line_name?: string
          class_name?: string[]
        }
        Returns: {
          timeframe: string
          count: number
          class: string
        }[]
      }
      get_uplinks_within_time: {
        Args: {
          device_eui: string
        }
        Returns: {
          received_at: string
          dev_eui_a: string
          dev_eui_b: string
          decoded_payload_a: Json
          decoded_payload_b: Json
          alat: number
          alng: number
          blat: number
          blng: number
        }[]
      }
      getco2uplinks: {
        Args: {
          dev_eui: string
          skip?: number
          limit_count?: number
          start_time?: string
          end_time?: string
        }
        Returns: {
          rssi: number
          created_at: string
          battery: number
          temperature: number
          humidity: number
          co2_level: number
          pressure: number
          location_name: string
          location_description: string
        }[]
      }
      latest_uplinks_for_eui: {
        Args: {
          eui: string
          cnt: number
        }
        Returns: {
          lorawan_uplinks: Json
          data_key: string
          data_type: string
          display_as: string
          alias: string
          divisor: number
        }[]
      }
      roadeventscounts1: {
        Args: {
          time_group: string
        }
        Returns: {
          grouped_time: string
          total_count: number
        }[]
      }
      roadeventscounts2: {
        Args: {
          time_group: string
          start_date: string
          end_date: string
          class_types: string[]
          line_id?: string
        }
        Returns: {
          grouped_time: string
          total_count: number
        }[]
      }
      roadeventscounts3: {
        Args: {
          time_group: string
          start_date: string
          end_date: string
          class_types: string[]
          line_id?: string
        }
        Returns: {
          grouped_time: string
          total_count: number
        }[]
      }
      roadeventscounts4: {
        Args: {
          time_group: string
          start_date: string
          end_date: string
          class_types: string[]
          line_id?: string
        }
        Returns: {
          grouped_time: string
          total_count: number
        }[]
      }
      roadeventscounts5: {
        Args: {
          time_group: string
          start_date: string
          end_date: string
          class_types: string[]
          line_id?: string
        }
        Returns: {
          grouped_time: string
          total_count: number
        }[]
      }
      trafficcountsgrouped2: {
        Args: {
          start_date: string
          end_date: string
          classes: string[]
          time_span: string
          line_id: string
        }
        Returns: {
          date: string
          value: number
        }[]
      }
      trafficcountsgrouped3: {
        Args: {
          start_date: string
          end_date: string
          classes: string[]
          time_span: string
          line_id: string
        }
        Returns: {
          date: string
          value: number
        }[]
      }
      trafficcountsgroupedtest: {
        Args: {
          start_date: string
          end_date: string
          classes: string[]
          time_span: string
          line_id: string
        }
        Returns: {
          date: string
          value: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
