import Cookies from "js-cookie";

export const formatDate = (dateStr: string | number | Date): string => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const formatDateToInputFormat = (dateStr: string | number | Date): string => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

export const getCompanyId = () => {
  return Cookies.get("company_id") || null;
};

export const userRolesFromLogin = (type: number) => {
  switch (type) {
    case 1:
      return "SuperAdmin";
    case 2:
      return "CompanyAdmin";
    case 3:
      return "Candidate";
    case 4:
      return "HRManager";
    case 5:
      return "HiringManager";
    default:
      return "";
  }
};

export const RegularExpressions = {
  email: /^(?![.-])([A-Za-z0-9._%+-]+)@([A-Za-z0-9.-]+)\.([A-Za-z]{2,})$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
  phone: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
};

export function extractDigits(
  input: string | number | null | undefined
): string {
  if (input == null) {
    return "";
  }
  if (typeof input === "number") {
    return input.toString();
  }
  if (typeof input === "string" && /^\d+$/.test(input)) {
    return input;
  }
  if (typeof input === "string") {
    return input.replace(/\D/g, "");
  }
  return "";
}

export interface CityOption {
  value: string;
  label: string;
  state?: string;
  country?: string;
}

export interface CountryOption {
  value: string;
  label: string;
}

export const globalCities: CityOption[] = [
  // Major Global Cities
  { value: "Bangalore", label: "Bangalore", state: "Karnataka", country: "India" },
  { value: "Mumbai", label: "Mumbai", state: "Maharashtra", country: "India" },
  { value: "Delhi", label: "Delhi", state: "Delhi", country: "India" },
  { value: "New York", label: "New York", state: "NY", country: "United States" },
  { value: "London", label: "London", state: "England", country: "United Kingdom" },
  { value: "Singapore", label: "Singapore", state: "Singapore", country: "Singapore" },
  { value: "Dubai", label: "Dubai", state: "Dubai", country: "United Arab Emirates" },
  { value: "Tokyo", label: "Tokyo", state: "Tokyo", country: "Japan" },
  { value: "Sydney", label: "Sydney", state: "NSW", country: "Australia" },
  { value: "Toronto", label: "Toronto", state: "ON", country: "Canada" },

  // Indian Cities
  { value: "Hyderabad", label: "Hyderabad", state: "Telangana", country: "India" },
  { value: "Chennai", label: "Chennai", state: "Tamil Nadu", country: "India" },
  { value: "Kolkata", label: "Kolkata", state: "West Bengal", country: "India" },
  { value: "Pune", label: "Pune", state: "Maharashtra", country: "India" },
  { value: "Ahmedabad", label: "Ahmedabad", state: "Gujarat", country: "India" },

  // US Cities
  { value: "Los Angeles", label: "Los Angeles", state: "CA", country: "United States" },
  { value: "Chicago", label: "Chicago", state: "IL", country: "United States" },
  { value: "Houston", label: "Houston", state: "TX", country: "United States" },
  { value: "San Francisco", label: "San Francisco", state: "CA", country: "United States" },
  { value: "Boston", label: "Boston", state: "MA", country: "United States" },

  // UK Cities
  { value: "Manchester", label: "Manchester", state: "England", country: "United Kingdom" },
  { value: "Birmingham", label: "Birmingham", state: "England", country: "United Kingdom" },
  { value: "Glasgow", label: "Glasgow", state: "Scotland", country: "United Kingdom" },
  { value: "Liverpool", label: "Liverpool", state: "England", country: "United Kingdom" },
  { value: "Edinburgh", label: "Edinburgh", state: "Scotland", country: "United Kingdom" },

  // Australian Cities
  { value: "Melbourne", label: "Melbourne", state: "VIC", country: "Australia" },
  { value: "Brisbane", label: "Brisbane", state: "QLD", country: "Australia" },
  { value: "Perth", label: "Perth", state: "WA", country: "Australia" },
  { value: "Adelaide", label: "Adelaide", state: "SA", country: "Australia" },

  // Canadian Cities
  { value: "Vancouver", label: "Vancouver", state: "BC", country: "Canada" },
  { value: "Montreal", label: "Montreal", state: "QC", country: "Canada" },
  { value: "Calgary", label: "Calgary", state: "AB", country: "Canada" },
  { value: "Ottawa", label: "Ottawa", state: "ON", country: "Canada" },
];

export const popularCountries: CountryOption[] = [
  { value: "India", label: "India" },
  { value: "United States", label: "United States" },
  { value: "United Kingdom", label: "United Kingdom" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "Germany", label: "Germany" },
  { value: "France", label: "France" },
  { value: "Singapore", label: "Singapore" },
  { value: "United Arab Emirates", label: "United Arab Emirates" },
  { value: "Japan", label: "Japan" },
];
