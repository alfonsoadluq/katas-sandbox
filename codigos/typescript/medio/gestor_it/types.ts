export type EmployeeBase = {
  id: number;
  name: string;
  email: string;
};

export type Developer = {
  role: "developer";
  languages: string[];
};

export type Designer = {
  role: "designer";
  software: string[];
};

export type FullDeveloper = EmployeeBase & Developer;
export type FullDesigner = EmployeeBase & Designer;

export type StaffMember = FullDeveloper | FullDesigner;