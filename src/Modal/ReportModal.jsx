import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { addReport } from "../Api/properties";
const ReportModal = ({ agent, _id, title, closeModal, reportModalIsOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const reporterName = user?.displayName;
  const reporterImage = user?.photoURL;
  const reporterEmail = user?.email;
  const agentName = agent?.name;
  const reportDate = new Date();
  const handleSubmit = async (e) => {
    const reportDescription = e.target.description.value;
    if (reportDescription.length < 10) {
      toast.error("Please fill out minimum 10 characters ");
    }
    if (reportDescription.length >= 10) {
      closeModal();
    }
    const reportData = {
      propertyTitle: title,
      propertyId: _id,
      reviewDescription: reportDescription,
      reporterName: reporterName,
      reporterImage: reporterImage,
      reporterEmail: reporterEmail,
      agentName,
      reportDate,
    };
    setLoading(true);
    e.preventDefault();
    try {
      const data = await addReport(reportData);
      console.log(data);
      if (data.insertedId) {
        toast.success("Your review sent successfully");
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
    console.log(reportData);
  };

  return (
    <Transition appear show={reportModalIsOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Report successful
                </Dialog.Title>
                <form onSubmit={handleSubmit}>
                  <div className="mt-2">
                    <label htmlFor="location" className="block text-gray-600">
                      Property Title
                    </label>
                    <input
                      className="w-full px-4 py-3 text-gray-800 border border-[#1c4456] focus:outline-[#1c4456] rounded-md "
                      name="title"
                      id="title"
                      type="text"
                      defaultValue={title}
                      disabled
                    />
                    <div className="space-y-1 text-sm">
                      <label
                        htmlFor="description"
                        className="block text-gray-600"
                      >
                        Description
                      </label>

                      <textarea
                        id="description"
                        className="block rounded-md focus:[#1c4456] w-full h-32 px-4 py-3 text-gray-800  border border-[#1c4456] focus:outline-[#1c4456] "
                        name="description"
                        required
                        placeholder="Minimum 10 characters....."
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ReportModal;
