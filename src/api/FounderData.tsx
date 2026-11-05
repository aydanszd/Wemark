const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "https://admin.wemark.pro/api";

export type FounderData = {
    title: string;
    description: string;
    name: string;
    position: string;
    image: string;
    linkedin_url: string;
    instagram_url: string;
};

export type XSchoolData = {
    banner_title: string;
    banner_image: string;
    about_title: string;
    about_description: string;
    about_images: { image: string }[];
    founders: FounderData[];
};

export async function getXSchool(): Promise<XSchoolData> {
    const res = await fetch(`${API_URL}/tasks-xschool/`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error(`API xətası: ${res.status}`);
    }

    return res.json();
}