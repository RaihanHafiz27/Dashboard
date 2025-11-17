export interface Users {
  id: string;
  name: string;
  telp: string;
  location: string;
  image: string;
  status: boolean;
  email: string;
}

const dummyImages = [
  "/images/woman-2.png",
  "/images/man-4.png",
  "/images/woman-5.png",
  "/images/man-1.png",
  "/images/woman-6.png",
  "/images/man-2.png",
  "/images/woman-4.png",
  "/images/man-3.png",
];

const addresses = [
  "indonesia",
  "south korea",
  "germany",
  "united states",
  "france",
  "japan",
  "united kingdom",
  "singapore",
];

const names = [
  "alicia tan",
  "daniel kim",
  "sophia muller",
  "ethan smith",
  "anna liebert",
  "ravi patel",
  "mia johnson",
  "john doe",
];

const phone = [
  "+62 812 3456 1234",
  "+82 10 2233 7890",
  "+49 171 2231234",
  "+1 408 555 1234",
  "+33 6 12 34 56 78",
  "+91 98765 43210",
  "+44 7700 900123",
  "+12 7820 921222",
];

const generateDummyDataUsers = () => {
  const dummyUsers: Users[] = [];

  for (let i = 1; i <= 21; i++) {
    // Ambil nama saat ini
    const currentName = names[i % names.length];

    // Ubah nama agar valid untuk email
    const emailName = currentName.split(" ")[0].toLowerCase();
    dummyUsers.push({
      id: `USR-${0 + i}`,
      location: addresses[i % addresses.length],
      name: currentName,
      // 2. Ambil path gambar secara berurutan atau acak
      image: dummyImages[i % dummyImages.length],
      telp: phone[i % phone.length],
      status: i % 3 !== 0 ? true : false,
      email: `${emailName}@example.com`,
    });
  }
  return dummyUsers;
};

export const allDummyUsers = generateDummyDataUsers();
