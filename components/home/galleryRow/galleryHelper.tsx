export const originalClass = `
h-[270px] 
md:h-[540px] 
w-full 
[&>img]:!h-full 
[&>img]:!w-[full] 
[&>img]:!object-cover 
rounded-2xl 
overflow-hidden
`;

export const thumbnailClass = `
h-[90px] 
w-[160px] 
[&>img]:!h-full 
[&>img]:!w-[full] 
[&>img]:!object-cover 
rounded-xl 
overflow-hidden 
!border-none
mx-[8px]
my-[6px]
shadow-sm
`;

export const images = [
  {
    original:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    originalClass: originalClass,
    thumbnailClass: thumbnailClass,
  },
  {
    original:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    originalClass: originalClass,
    thumbnailClass: thumbnailClass,
  },
  {
    original:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    originalClass: originalClass,
    thumbnailClass: thumbnailClass,
  },
];
