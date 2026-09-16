/**
 * Hand-authored schema types for the eight tables in
 * GrowLedger_PRD_and_Development_Guide v1.4, Section 6: Recommended Data
 * Model. Keep in sync with the actual Supabase migrations; regenerate or
 * hand-update these when the schema changes (see Appendix: Change Control).
 *
 * cycle_crops is one row per crop grown within a cycle — the unit every
 * calculation in lib/calculations compares and flags — not cycles itself.
 * grow_space, production_method, dates, and status are shared by every
 * crop in a cycle. operational_notes is also shared at the cycle level,
 * not split per cycle_crop.
 */

/** Fixed list — Section 6 / Appendix: Change Control. Not free text. */
export type AreaUnit = "sq_ft" | "m2";

/** Fixed list — Section 6 / Appendix: Change Control. Not free text. */
export type ProductionMethod =
  | "soil"
  | "hydroponic"
  | "aquaponic"
  | "substrate"
  | "other";

/** FR-05: create, edit, complete, and cancel cycles. */
export type CycleStatus = "active" | "completed" | "cancelled";

/** FR-06: a cost specific to one crop is direct; one split across crops in the same cycle is estimated. */
export type AllocationType = "direct" | "estimated";

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string;
          facility_name: string | null;
        };
        Insert: {
          id: string;
          display_name: string;
          facility_name?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Insert"]>;
      };
      crop_profiles: {
        Row: {
          id: string;
          grower_id: string;
          crop_name: string;
          cultivar: string | null;
          standard_yield_unit: string;
        };
        Insert: {
          id?: string;
          grower_id: string;
          crop_name: string;
          cultivar?: string | null;
          standard_yield_unit: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["crop_profiles"]["Insert"]
        >;
      };
      grow_spaces: {
        Row: {
          id: string;
          grower_id: string;
          name: string;
          /** Total floor footprint, not canopy area. */
          area: number;
          area_unit: AreaUnit;
          production_method: ProductionMethod;
        };
        Insert: {
          id?: string;
          grower_id: string;
          name: string;
          area: number;
          area_unit: AreaUnit;
          production_method: ProductionMethod;
        };
        Update: Partial<
          Database["public"]["Tables"]["grow_spaces"]["Insert"]
        >;
      };
      cycles: {
        Row: {
          id: string;
          grower_id: string;
          grow_space_id: string;
          /** Snapshot from grow_spaces.production_method at creation. */
          production_method: ProductionMethod;
          status: CycleStatus;
          start_date: string;
          end_date: string | null;
        };
        Insert: {
          id?: string;
          grower_id: string;
          grow_space_id: string;
          production_method: ProductionMethod;
          status: CycleStatus;
          start_date: string;
          end_date?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["cycles"]["Insert"]>;
      };
      cycle_crops: {
        Row: {
          id: string;
          cycle_id: string;
          crop_profile_id: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          cycle_id: string;
          crop_profile_id: string;
          created_at?: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["cycle_crops"]["Insert"]
        >;
      };
      cost_items: {
        Row: {
          id: string;
          cycle_crop_id: string;
          category: string;
          amount: number;
          currency: string;
          allocation_type: AllocationType;
          incurred_on: string;
        };
        Insert: {
          id?: string;
          cycle_crop_id: string;
          category: string;
          amount: number;
          currency: string;
          allocation_type: AllocationType;
          incurred_on: string;
        };
        Update: Partial<Database["public"]["Tables"]["cost_items"]["Insert"]>;
      };
      yield_records: {
        Row: {
          id: string;
          cycle_crop_id: string;
          harvested_amount: number;
          saleable_amount: number | null;
          unit: string;
          harvested_on: string;
        };
        Insert: {
          id?: string;
          cycle_crop_id: string;
          harvested_amount: number;
          saleable_amount?: number | null;
          unit: string;
          harvested_on: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["yield_records"]["Insert"]
        >;
      };
      operational_notes: {
        Row: {
          id: string;
          cycle_id: string;
          occurred_on: string;
          category: string;
          description: string;
        };
        Insert: {
          id?: string;
          cycle_id: string;
          occurred_on: string;
          category: string;
          description: string;
        };
        Update: Partial<
          Database["public"]["Tables"]["operational_notes"]["Insert"]
        >;
      };
    };
  };
}

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type CropProfile =
  Database["public"]["Tables"]["crop_profiles"]["Row"];
export type GrowSpace = Database["public"]["Tables"]["grow_spaces"]["Row"];
export type Cycle = Database["public"]["Tables"]["cycles"]["Row"];
export type CycleCrop = Database["public"]["Tables"]["cycle_crops"]["Row"];
export type CostItem = Database["public"]["Tables"]["cost_items"]["Row"];
export type YieldRecord =
  Database["public"]["Tables"]["yield_records"]["Row"];
export type OperationalNote =
  Database["public"]["Tables"]["operational_notes"]["Row"];
