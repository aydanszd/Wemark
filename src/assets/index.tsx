const API_URL =
    process.env.NEXT_PUBLIC_API_URL ?? "https://admin.wemark.pro/api";

export type XSchoolData = {
    banner_title: string;
    banner_image: string;
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