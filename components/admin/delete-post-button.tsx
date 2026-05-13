"use client";

import { deletePostAction } from "@/lib/actions";
import { Button } from "@/components/ui/button";

export function DeletePostButton({ id }: { id: number }) {
  return (
    <form
      action={deletePostAction}
      onSubmit={(event) => {
        if (!window.confirm("Bu yaziyi silmek istediginize emin misiniz?")) {
          event.preventDefault();
        }
      }}
    >
      <input name="id" type="hidden" value={id} />
      <Button size="sm" type="submit" variant="ghost">
        Sil
      </Button>
    </form>
  );
}
