import Image from 'next/image';

const Login: React.FC = () => (
  <div className="flex items-center gap-2">
    <span className="text-white">Usuario nuevo</span>
    <Image src="/images/user2.png" alt="Usuario" width={28} height={28} />
  </div>
);

export default Login;