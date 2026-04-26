import { useState } from "react";
import { ProfileForm } from "./ProfileForm";
import { ProfilePreview } from "./ProfilePreview";

export function ProfileGenerator() {
  const [profile, setProfile] = useState({
    name: "",
    role: "",
    avatar: "",
    bio: "",
  });

  const updateField = (field: keyof typeof profile) => (value: string) =>
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));

  const resetProfile = () =>
    setProfile({
      name: "",
      role: "",
      avatar: "",
      bio: "",
    });

  return (
    <div className="text-center h-dvh bg-radial from-main from-30% to-black p-5 ">
      <div className="flex min-h-200 h-[75%] flex-row gap-1 rounded-xl gradient-background">
        <div className="w-3/5 flex justify-center items-center">
          <ProfilePreview profile={profile} />
        </div>
        <div className="w-2/5">
          <ProfileForm
            profile={profile}
            onUpdate={updateField}
            resetProfile={resetProfile}
          />
        </div>
      </div>
    </div>
  );
}
