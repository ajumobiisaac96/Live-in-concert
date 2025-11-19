"use client";

const APPWRITE_ENDPOINT =
  process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ||
  "https://fra.cloud.appwrite.io/v1";
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || "";
const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || "";
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID || "";

export const appwriteConfig = {
  databaseId: DATABASE_ID,
  collectionId: COLLECTION_ID,
};

export const saveRegistration = async (data: {
  fullName: string;
  phone: string;
}) => {
  try {
    if (!DATABASE_ID || !COLLECTION_ID || !PROJECT_ID) {
      throw new Error(
        "Appwrite configuration is missing. Please check your environment variables."
      );
    }

    // Generate a unique ID
    const documentId =
      "unique_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);

    const documentData = {
      fullName: data.fullName,
      phone: data.phone,
      registeredAt: new Date().toISOString(),
      eventName: "Awakening Concert 2025",
    };

    // Make API call to Appwrite
    const response = await fetch(
      `${APPWRITE_ENDPOINT}/databases/${DATABASE_ID}/collections/${COLLECTION_ID}/documents`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Appwrite-Project": PROJECT_ID,
        },
        body: JSON.stringify({
          documentId: documentId,
          data: documentData,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to save registration");
    }

    const result = await response.json();
    console.log("[v0] Registration saved successfully:", result);
    return result;
  } catch (error) {
    console.error("[v0] Error saving registration to Appwrite:", error);
    throw error;
  }
};
