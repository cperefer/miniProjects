import ProfileFormInputText from "./ProfileFormInputText";

interface Props {
  profile: {
    name: string;
    avatar: string;
    role: string;
    bio: string;
  };
  onUpdate: (field: string) => (value: string) => void;
  resetProfile: () => void;
}

export function ProfileForm({ profile, onUpdate, resetProfile }: Props) {
  return (
    <div className="h-full border-l-2 border-l-border bg-secondary text-left px-6 rounded-r-xl">
      <div className="py-3">
        <h2 className="text-3xl font-bold">Editar tarjeta</h2>
        <h3>Completa los datos para generar tu tarjeta.</h3>
      </div>
      <form>
        <ProfileFormInputText
          title="Nombre"
          inputName="name"
          value={profile.name}
          setValue={onUpdate("name")}
        />
        <ProfileFormInputText
          title="Rol"
          inputName="role"
          value={profile.role}
          setValue={onUpdate("role")}
        />
        <ProfileFormInputText
          title="Avatar (URL)"
          inputName="avatar"
          value={profile.avatar}
          setValue={onUpdate("avatar")}
        />
        <ProfileFormInputText
          title="Bio"
          inputName="bio"
          value={profile.bio}
          setValue={onUpdate("bio")}
          isTextarea={true}
        />
        <button
          onClick={resetProfile}
          className="bg-purple-500 p-2 rounded-md cursor-pointer"
        >
          Limpiar formulario
        </button>
      </form>
    </div>
  );
}
