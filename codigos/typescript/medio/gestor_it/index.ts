type EmployeeBase = {
    id: number;
    name: string;
    email: string;
}

type Developer = {
    role: "developer";
    languages: string[];
}

type Designer = {
  role: "designer";
  software: string[];
};

type FullDeveloper = EmployeeBase & Developer;
type FullDesigner = EmployeeBase & Designer;

type StaffMember = FullDeveloper | FullDesigner;

const printStaffDetails = (staff: StaffMember): void => {
    let actualRole = "";
    let skills = ""

    switch (staff.role) {
      case "developer":
        actualRole = "Desarrollador";
        skills = staff.languages.join(",");
        break;

      case "designer":
        actualRole = "Diseñador";
        skills = staff.software.join(",");
        break;

      default:
        console.log("Rol desconocido");
        break;
    }

    console.log(`ID:${staff.id}\nNombre:${staff.name}\nEmail:${staff.email}\nRol:${actualRole}\nSkills:${skills}`);
}


const myTeam: StaffMember[] = [
  {
    id: 1,
    name: "Alfonso",
    email: "alfonso@tech.com",
    role: "developer",
    languages: ["TypeScript", "JavaScript", "PHP"],
  },
  {
    id: 2,
    name: "Elena",
    email: "elena@design.com",
    role: "designer",
    software: ["Figma", "Illustrator"],
  },
];

myTeam.forEach((member) => printStaffDetails(member));