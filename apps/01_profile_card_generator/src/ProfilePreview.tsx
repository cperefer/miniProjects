export function ProfilePreview({ profile }) {
  return (
    <div className="card w-2/3 h-8/12 rounded-xl py-5 px-3">
      <div className="flex justify-center h-50">
        {
          // TODO: spinner or something until image is loaded
          profile.avatar && (
            <img
              src={profile.avatar}
              alt={profile.name}
              className="rounded-full border-3 border-divider"
            />
          )
        }
      </div>
      <div className="mx-5 mb-5 pb-2 border-b-2 border-b-divider">
        <p className="text-3xl font-bold">{profile.name}</p>
        <p className="text-xl text-accent-primary/85 font-bold">
          {profile.role}
        </p>
      </div>
      <div className="px-5 text-center">{profile.bio}</div>
    </div>
  );
}
