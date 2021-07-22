import {
  Breadcrumb as BreadcrumbUI,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
} from "@chakra-ui/react";

const Breadcrumb = ({ paths }) => {
  return (
    <BreadcrumbUI fontWeight="bold" mb={5} mt={2}>
      {paths.map((p, index) => (
        <BreadcrumbItem key={index}>
          {p.path ? (
            <BreadcrumbLink href={p.path}>{p.name}</BreadcrumbLink>
          ) : (
            <Text fontWeight={400}>{p.name}</Text>
          )}
        </BreadcrumbItem>
      ))}
    </BreadcrumbUI>
  );
};

export default Breadcrumb;
