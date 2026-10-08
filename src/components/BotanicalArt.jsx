import { useId } from 'react';

export default function BotanicalArt({ className = '' }) {
  const leafId = useId().replaceAll(':', '');
  return (
    <svg className={className} viewBox="0 0 420 530" fill="none" aria-hidden="true">
      <defs>
        <path id={leafId} d="M0 0C-30-7-62-36-52-65C-23-58 0-33 0 0Z" />
      </defs>
      <path d="M203 510C220 422 201 375 225 289C245 220 268 151 249 70" stroke="#f0f0d9" strokeWidth="2" />
      <path d="M219 349C159 316 127 264 105 200M231 265C296 247 333 204 350 145M217 393C273 377 316 348 342 301M239 202C196 173 164 139 151 95" stroke="#f0f0d9" strokeWidth="1.5" />
      <g fill="#b6c5a7">
        <use href={`#${leafId}`} transform="translate(223 298) rotate(-20) scale(1.1)" />
        <use href={`#${leafId}`} transform="translate(232 262) rotate(85) scale(1.15)" />
        <use href={`#${leafId}`} transform="translate(244 219) rotate(-13) scale(.95)" />
        <use href={`#${leafId}`} transform="translate(252 179) rotate(78) scale(.88)" />
        <use href={`#${leafId}`} transform="translate(253 132) rotate(2) scale(.75)" />
        <use href={`#${leafId}`} transform="translate(251 85) rotate(32) scale(.65)" />
        <use href={`#${leafId}`} transform="translate(178 319) rotate(-32) scale(.87)" />
        <use href={`#${leafId}`} transform="translate(146 279) rotate(49) scale(.8)" />
        <use href={`#${leafId}`} transform="translate(124 242) rotate(-25) scale(.75)" />
        <use href={`#${leafId}`} transform="translate(112 213) rotate(12) scale(.65)" />
        <use href={`#${leafId}`} transform="translate(283 243) rotate(95) scale(.85)" />
        <use href={`#${leafId}`} transform="translate(316 213) rotate(9) scale(.72)" />
        <use href={`#${leafId}`} transform="translate(335 179) rotate(87) scale(.63)" />
        <use href={`#${leafId}`} transform="translate(267 378) rotate(87) scale(.9)" />
        <use href={`#${leafId}`} transform="translate(310 350) rotate(1) scale(.8)" />
        <use href={`#${leafId}`} transform="translate(332 320) rotate(79) scale(.65)" />
        <use href={`#${leafId}`} transform="translate(207 176) rotate(-27) scale(.7)" />
        <use href={`#${leafId}`} transform="translate(173 136) rotate(15) scale(.65)" />
      </g>
      <g stroke="#536052" strokeWidth=".7" opacity=".7">
        <path d="m224 298-55-65m64 30 62-56m-50-43-48-47m56 15 37-39m-112 226-46-61m14 22 31-48m-53 11-27-48m161 184 57-43m-13 17-29-52" />
      </g>
    </svg>
  );
}
