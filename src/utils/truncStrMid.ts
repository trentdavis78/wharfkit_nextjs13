const truncStrMid = (s: string, l: number) =>
s && s.length > l * 2
? `${s.substring(0, l)}...${s.substring(
  s.length - l
)}`
: s;

export default truncStrMid;