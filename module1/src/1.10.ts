{
    //union type

    // type FrontendDeveloper='juniorDeveloper'|'seniorDeveloper';
    // const reactDeveloper:FrontendDeveloper="juniorDeveloper";

    type User = {
        name: string;
        email?: string;
        gender: 'male' | 'female';
        bloodGroup: "O+" | "B+" | "Ab+"
    }

    const user: User = {
        name: 'suman',
        gender: 'male',
        bloodGroup: "O+"
    }

    type FrontendDeveloper = {
        skills: string[];
        designation1: 'Frontend Developer'
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ['html', 'css'],
        designation1: 'Frontend Developer',
        designation2: "Backend Developer"


    }

}