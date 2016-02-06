class EntriesController < BaseController

  def index
    render :json => Entry.latest
  end

  def show
    render :json => Entry.find(params[:id])
  end

  def create
    form = EntryForm.new Entry.new

    if form.validate params[:entry]
      form.save

      render :json => form.model
    else
      # do something
    end
  end

  def update
    form = EntryForm.new Entry.find(params[:id])

    if form.validate params[:entry]
      form.save

      render :json => form.model
    else
      # do something
    end
  end

  def destroy
    entry = Entry.find params[:id]
    entry.destroy

    render :json => {:success => true}
  end

end
