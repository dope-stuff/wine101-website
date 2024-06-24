export default function Comments({ comments }: { comments: string[] }) {
    return (
      <div className="w-full flex-col flex">
        <div className="grid grid-cols-2 gap-4">
          {comments.map((comment, i) => (
            <div
              key={i}
              className="flex"
              style={{ marginLeft: i > 1 ? "auto" : "" }}
            >
              <div className="bg-[#EFEFEF] p-4 rounded-lg">{comment}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  