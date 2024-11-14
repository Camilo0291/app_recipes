import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <img
        src="/public/profile-icon.png"
        alt="Profile"
        className="profile-image"
      />
      <h2 className="title-profile">Mi Perfil</h2>

      <p>
      Esta es tu página de perfil. Aquí puedes ver y actualizar tu información personal, gestionar tus preferencias y ajustar la configuración de tu cuenta para una experiencia personalizada.
      </p>
    </div>
  );
};

export default Profile;
