import Layout from "@/components/Layout";

export default function NewProduct() {
  return (
    <Layout>
      <h1 className=" bg-blue-900 rounded-md text-white py-2 px-2 mb-4">
        Nouvel Produit
      </h1>
      <input type="text" placeholder="Nom Produit" />
      <textarea placeholder="description"></textarea>
    </Layout>
  );
}
